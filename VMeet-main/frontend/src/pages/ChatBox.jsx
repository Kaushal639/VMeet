import React from 'react'

const ChatBox = () => {
    let chatRef = useRef();

    let [messages, setMessages] = useState([])

    let [message, setMessage] = useState("");

    let [newMessages, setNewMessages] = useState(3);

    let [showModal, setModal] = useState(true);

    let openChat = () => {
        setModal(true);
        setNewMessages(0);
    }
    let closeChat = () => {
        setModal(false);
    }
    let handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const addMessage = (data, sender, socketIdSender) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: sender, data: data }
        ]);
        if (socketIdSender !== socketIdRef.current) {
            setNewMessages((prevNewMessages) => prevNewMessages + 1);
        }
    };
    let sendMessage = () => {
        console.log(socketRef.current);
        socketRef.current.emit('chat-message', message, username)
        setMessage("");

        // this.setState({ message: "", sender: username })
    }


    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);



  return (
    <div>
      {showModal ? <div className={styles.chatRoom}>

<div className={styles.chatContainer}>
    <h1>Chat</h1>

    <div ref={chatRef} className={styles.chattingDisplay} style={{ overflowY: "scroll", maxHeight: "72vh" }}>
        {messages.length !== 0 ? messages.map((item) => (
            <div key={item.id} >
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{item.sender}</p>
                <p>{item.data}</p>
            </div>
        )) : <p>No Messages Yet</p>}
    </div>

    <div className={styles.chattingArea}>
        <TextField value={message} onChange={(e) => setMessage(e.target.value)} id="outlined-basic" label="Enter Your chat" variant="outlined" />
       
            <Button style={{marginLeft: '10px'}} variant="contained" onClick={sendMessage}>Send</Button>
        


    </div>


</div>
</div> : <></>}
    </div>
  )
}

export default ChatBox
