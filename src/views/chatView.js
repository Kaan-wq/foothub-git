import "../styles/Chat.css"

function ChatView(){
    return (
        <div className="chat-container">
            <div className="chat-box">
                <div className="chat-message">
                    <span className="chat-time">10:30 AM</span>
                    <span className="chat-text">Hi there!</span>
                </div>
                <div className="chat-message">
                    <span className="chat-time">10:31 AM</span>
                    <span className="chat-text">How can I help you?</span>
                </div>
            </div>
            <div className="chat-input-container">
                <input type="text" placeholder="Type your message here" className="chat-input"/>
                <button className="chat-send-button">Send</button>
            </div>
        </div>
    )
}

export default ChatView;