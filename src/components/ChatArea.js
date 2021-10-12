import React from 'react'
import './styles/chatarea.css'

const ChatArea = () => {

    let chatObj = {
        userID: {
            type: String,
            required: true
        },
        text: String,
        reaction: {
            like: {
                type: Boolean,
                default: false
            },
            dislike: {
                type: Boolean,
                default: false
            }
        },
    }

    return (
        <div className="chat-area">
            <div className="chat-text">
                <div className="profile-image">

                </div>
                <div className="actual-text">
                    <h2>this is a sample text</h2>
                </div>
                <div className="reaction">
                    <button>like</button>
                    <button>dislike</button>
                </div>
            </div>
            <div className="chat-text">
                <div className="profile-image">

                </div>
                <div className="actual-text">
                    <h2>this is a sample text</h2>
                </div>
                <div className="reaction">
                    <button>like</button>
                    <button>dislike</button>
                </div>
            </div>
            <div className="chat-text">
                <div className="profile-image">

                </div>
                <div className="actual-text">
                    <h2>this is a sample text</h2>
                </div>
                <div className="reaction">
                    <button>like</button>
                    <button>dislike</button>
                </div>
            </div>
        </div>
    )
}

export default ChatArea
