import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import { useState, useEffect } from 'react';

export default function MainPage(){
    const [ip, setIp] = useState(null);

    useEffect(() => {
        let ignore = false
        setIp(null)
        fetch('https://api64.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                if(!ignore){
                    setIp(data['ip'])
                }
            });

        return () => {
            ignore = true
        }
    }, []);


    console.log(ip)

    return(
        <>
            <Banner/>
            <Card>
                <Header
                    content='IPv4'
                />
                <Content
                    content={ip}
                />
            </Card>
            <Card>
                <Header
                    content='IPv6'
                />
                <Content
                    content='Not working'
                />
            </Card>
        </>
    );
}