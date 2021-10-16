import React from 'react'
import './styles/Text_message.css'

const TextMessage = (props) => {
    // let isMine = false;
    // if(props.value == "ismine"){

    //     isMine = true;
    // }else{
    //     isMine = false;
    // }

    console.log("props : " + props.name);

    if(props.name === "ismine"){
        return (

            // <div className="text-message-others">{props.name}</div>
            <div className="text-message-others"></div>
            // <div className="text-message-mine"></div>
        )   
    }else{

        return (
            
            // <div className="text-message-others"></div>
            // <div className="text-message-mine">{props.name}</div>
            <div className="text-message-mine"></div>
            )
    }
}

export default TextMessage
