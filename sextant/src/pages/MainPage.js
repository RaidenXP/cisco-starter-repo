import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Address from '../components/Address';

export default function MainPage(){
    return(
        <>
            <Banner/>
            <Card>
                <Header
                    content='IPv4'
                />
                <Address
                    url='https://api.ipify.org?format=json'
                />
            </Card>
            <Card>
                <Header
                    content='IPv6'
                />
                <Address
                    url='https://api64.ipify.org?format=json'
                />
            </Card>
        </>
    );
}