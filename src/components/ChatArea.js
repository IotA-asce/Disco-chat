import React, {useState} from 'react'
import './styles/chatarea.css'
import './styles/InputSection.css'
import TextMessage from './TextMessage'

const ChatArea = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let tmessages = messages
        tmessages.push(event.target.value);
        setMessages(tmessages);

        console.log(messages)
    }

    return (
        <div className="chat-area">
            {/* <h1>{chat}</h1> */}
            {/* <InputSection/> */}

            <TextMessage />
            <TextMessage/>
            <TextMessage/>
            <TextMessage name={"ismine"}/>

            <div className="input-section">
                <form className="input-field">

                    <button className="add-media" ><i className="fas fa-plus-circle"></i></button>

                    <input
                        type="text"
                        className="msg-input"
                        placeholder="message..."
                        name="inputText"
                        value={input}
                        autoComplete="off"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />

                    <button className="add-emoji"><i className="far fa-smile-wink"></i></button>

                </form>
            </div>
        </div>
    )
}

export default ChatArea;