import React from 'react'
import './styles/chatarea.css'
import InputSection from './InputSection'

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
            <InputSection/>
        </div>
    )
}

export default ChatArea
