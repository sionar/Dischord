# [Dischord](https://dischord-app.herokuapp.com)
![screenshot](https://github.com/sionar/Dischord/blob/master/screenshots/1.png)

## Description

[Dischord](https://dischord-app.herokuapp.com) is a clone of the popular web chatting client Discord. The app allows users to create their own chatrooms (named servers) and chat with each other in real time. The owner of the server can create multiple rooms (named channels) for different topics. Servers are not public - users can invite others to the server with a 6 letter server key. 

Dischord uses Ruby on Rails 5.2.4 with postgresql on the backend. Action Cable is used on Rails to integrate WebSockets with the backend. Active Storage is used to bind the image urls for the user and servers to their respective models, and link them with Amazon web storage. On the frontend, React Redux is used with React Router to create a single page application. npm is used to package the dependencies for the app. The app is hosted on Heroku, and the assets are stored on AWS S3 buckets.


## Technical Aspects

One of the goals of the app is to provide the user with a seamless experience as they navigate the app. One point of optimization is to limit the number of API calls we make to the rails backend. In order to do that, the app makes one API call that fetches all of the information (the servers that they are subscribed to, the channels on each server, the users on the server, and 50 of the most recent posts on each channel) as soon as they log in. The alternative would be to make API calls to the backend each time they navigate to a different server or a channel. The tradeoff for the first approach is there could be data that the user never uses, and there could be memory limitations if the user is subscribed to many servers, but the upside is that the user does not have to wait when they switch channels or servers.

On the backend, the request when the user logs in is handled like this:
	
```
  def index
    @servers = current_user.subscribed_servers.includes(:subscribed_users, :subscriptions, :server_keys, :channels, :messages)
    @users = Array.new
    @subscriptions = Array.new
    @server_keys = Array.new
    @channels = Array.new
    @active_channels = Hash.new
    @messages = Array.new
    @servers.each do |server|
      @users += server.subscribed_users
      @subscriptions += server.subscriptions
      @server_keys += server.server_keys
      @channels += server.channels
      @active_channels[server.id] = server.channels.first.id if server.channels.first
      @messages += server.messages
    end
    @users.push current_user if @users.empty?
    render :index, status: 200
  end
```

Includes are used in the @servers query to avoid N+1 queries when we loop through @servers to grab the associations. There are also some edge case condition checks - we want to return at least the @current_user in @users in case the current user isn't subscribed to any servers.


Another feature that the app implements to improve user experience is the management of active channels. The app keeps track of what channel the user is currently on, so when they navigate away do a different server and come back, the app redirects them to the same channel that they were previously on. There are several ways of implementing this. One way is for the backend to store the active channel id on the servers table as a column. Every time the user navigates to a new channel, an api call would have to be made to update the active channel for that server on the backend. The upside to this approach is that the active channels would still be there when the user navigates away from the site, but the downside is that there are many api calls. 

The approach the app uses is storing the active channels only as a value in the servers slice of state. When the user logs in, the active channel is set to the first channel for each server. Whenever the user navigates to another channel, an action is dispatched to the redux store that modifies the active channel value for that server. The tradeoff here is that the active channels reset whenever the user leaves the site, but we save a lot of api transactions. 
 
In the servers controller, setting the active channel is tricky because it isn't an association on the server, and our _server jbuilder partial only takes in a server local variable. We solve this by creating a hash that takes in each server_id: channel_id key value pair, and pass that hash as a variable to jbuilder.

In the controller:

```
@active_channels[server.id] = server.channels.first.id if server.channels.first
 ```

In the jbuilder view:
```   
json.servers do
    @servers.each do |server|
      json.partial! 'server', server: server, active_channels: @active_channels
    end
  end
```

The dispatch to the redux store when the user clicks on the channel on the frontend:
```
  handleClickChannel() {
    this.props.changeActiveChannel({
      serverId: this.props.channel.serverId,
      channelId: this.props.channel.id      
    })
  }
 ```
 
 And finally, our servers reducer:
 
 ```
 export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DATA:
      return action.payload.servers;
    case CREATE_SERVER:
      return Object.assign(nextState, action.payload.servers);
    case EDIT_SERVER:
      return Object.assign(nextState, action.server);
    case DELETE_SERVER:
      delete nextState[action.server.id];
      return nextState;
    case RECEIVE_SERVER_DATA:
      return Object.assign(nextState, action.payload.servers);
    case CHANGE_ACTIVE_CHANNEL:
      nextState[action.data.serverId].activeChannel = action.data.channelId;
      return nextState; 
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
 ```
 
 


## Installation on UNIX

1. Follow the guide [here](https://guides.rubygems.org/rubygems-basics/) to set up your ruby environment and install gem and bundler.
2. Clone the repository. ```git clone https://www.github.com/sionar/dischord.git```
3. run ```npm install``` to install the dependencies for the app.
4. run ```npm start``` to start webpack and create the bundle.js file.



