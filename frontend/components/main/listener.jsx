import React from 'react';
import Cable from 'actioncable';
import { matchPath } from "react-router-dom";

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.chats = {};
        this.createSockets = this.createSockets.bind(this);
        this.createSocket = this.createSocket.bind(this);
        this.actions = {
            createMessage: this.props.createMessage,
            editMessage: this.props.editMessage,
            deleteMessage: this.props.deleteMessage,
            createChannel: this.props.createChannel,
            editChannel: this.props.editChannel,
            deleteChannel: this.props.deleteChannel,
            editServer: this.props.editServer,
            deleteServer: this.props.deleteServer,
            foreignLeaveServer: this.props.foreignLeaveServer
        }
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.createSockets();
        }
    }

    componentDidUpdate(prevProps) {
        let found = false;
        if (prevProps.serverIds.length < this.props.serverIds.length) {
            for (let i = 0; i < this.props.serverIds.length; i++) {
                if (prevProps.serverIds[i] !==  this.props.serverIds[i]) {
                    found = true;
                    this.createSocket(this.props.serverIds[i])
                    break;
                }
            }
            if (!found)
                this.createSocket(this.props.serverIds[this.props.serverIds.length - 1]);
        } else if (prevProps.serverIds.length > this.props.serverIds.length) {
            for (let i = 0; i < prevProps.serverIds.length; i++) {
                if (prevProps.serverIds[i] !==  this.props.serverIds[i]) {
                    const identifier = `{"channel":"MessageChannel","id":${prevProps.serverIds[i]}}`
                    this.chats[identifier].unsubscribe();
                    delete this.chats[identifier];
                    break;
                }
            }
        }
    }

    componentWillUnmount() {
        const chats = Object.values(this.chats);
        chats.forEach(chat => chat.unsubscribe())        
    }

    createSockets() {
        let serverIds = this.props.serverIds;
        let sub;
        serverIds.forEach(id => {
            this.createSocket(id);
        })
    }

    createSocket(id) {
        const sub = App.cable.subscriptions.create(
            {
                channel: "MessageChannel",
                id: id
            },
            {
                connected: () => {
                },
                disconnected: () => {
                },
                received: data => {
                    if (data.action == 'deleteServer') {
                        const match = matchPath(this.props.location.pathname, {
                            path: "/channels/:serverId/:channelId"
                        })
                        
                        if (match.params.serverId === Object.keys(data.payload.servers)[0]) {
                            this.props.history.push('/channels/@me');
                        }
                    }
                    this.actions[data.action](data.payload);
                }
            }               
        );
        this.chats[sub.identifier] = sub;
    }

    render() {
        return null;
    }
}

export default Listener;