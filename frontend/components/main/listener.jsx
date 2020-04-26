import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.chats = {};
        this.createSockets = this.createSockets.bind(this);
        this.createSocket = this.createSocket.bind(this);
        this.actions = {
            receiveMessage: this.props.receiveMessage,
            editMessage: this.props.editMessage,
            deleteMessage: this.props.deleteMessage
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
                    let payload = {
                        messages: {
                            [data.message.id]: data.message
                        }
                    }
                    this.actions[data.action](payload);
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