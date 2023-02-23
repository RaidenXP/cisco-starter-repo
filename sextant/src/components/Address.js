import {useEffect, useState} from 'react'

export default function Address({ url }){
    const [ip, setIp] = useState(null);

    useEffect(() => {
        let ignore = false
        setIp(null)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if(!ignore){
                    setIp(data['ip'])
                }
            });

        return () => {
            ignore = true
        }
    }, [url]);


    console.log(ip)
    
    return(
        <>
            <p>
                {ip ?? 'Loading...'}
            </p>
        </>
    );
}