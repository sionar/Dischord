import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.createSockets = this.createSockets.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.createSockets();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && this.props.currentUser !== prevProps.currentUser) {
            this.createSockets();
        }
    }

    componentWillUnmount() {
        for (let i = 0; i < this.chats.length; i++) {
            let channel = this.chats[i];
            channel.unsubscribe();
        }
        
    }

    createSockets() {
        let serverIds = this.props.serverIds;   
        this.chats = serverIds.map(id => {
            return App.cable.subscriptions.create(
                {
                    channel: "MessageChannel",
                    server: id
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
                        this.props.receiveMessage(payload);
                    }
                }               
            );
        })
    }

    render() {
        return null;
    }
}

export default Listener;