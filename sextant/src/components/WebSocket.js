import {w3cwebsocket as W3CWebSocket} from "websocket";
import {useEffect, useState} from 'react'
const client = new W3CWebSocket('ws://localhost:55455')

export default function WebSocket(){
    const [latency, setLat] = useState(null);
    
    useEffect(() => {
        let ignore = false
        setLat(null)
        client.onmessage = (message) => {
            if(!ignore){
                setLat(new Date().getTime() - message.data)
            }
        };

        return () => {
            ignore = true
        }
    }, []);

    return(
        <>
            <p>
                {latency ?? 'Loading...'}
            </p>
        </>
    );
}