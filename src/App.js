import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import imgOne from './assets/bg1.jpg';
import imgTwo from './assets/bg2.jpg';

const App = () => {
    return (
        <>
            <Header
                title="This is new Title"
                descr="This is new description"
            />
            <Layout
                title="This is first Layout"
                descr="First Layout"
                urlBg={imgOne}
            />
            <Layout
                title="This is second Layout"
                descr="Second Layout"
                colorBg={'red'}
            />
            <Layout
                title="This is third Layout"
                descr="Third Layout"
                urlBg={imgTwo}
            />
            <Footer />
        </>
    );
}
export default App;
