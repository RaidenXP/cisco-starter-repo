import Banner from '../components/Banner';
import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';

export default function MainPage(){
    return(
        <>
            <Banner/>
            <Card>
                <Header></Header>
                <Content></Content>
            </Card>
            <Card>
                <Header></Header>
                <Content></Content>
            </Card>
        </>
    );
}