import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        if(value.trim() !== '') {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setValue('')
    }

    if(loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container justifyContent='center' style={{height: window.innerHeight - 50}}>
                <div className='chat'>
                    {messages.map((message, index) =>
                        <div key={index} className='chat_content'
                             style={{
                                 border: user.uid === message.uid ? '2px solid green' : '2px solid orange',
                                 marginLeft: user.uid === message.uid ? 'auto' : '10px'
                        }}>
                            <Grid container className='msg'>
                                <Avatar src={message.photoURL} />
                                <div className='name'>{message.displayName}</div>
                            </Grid>
                            <div>
                                {message.text}
                            </div>
                        </div>
                    )}
                </div>
                <Grid container direction='column' alignItems='flex-end' style={{width: '80%'}}>
                    <TextField
                        placeholder='Type something...'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        maxRows={2}
                        fullWidth
                        variant='outlined'
                    />
                    <Button onClick={sendMessage} variant='contained'>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;