import Layout from "../../components/Layout";
import imgThree from "../../assets/bg3.jpg";

const NotFound = () =>{
    return (
        <>
            <Layout
                id = "notfound"
                title="404 PAGE NOT FOUND"
                urlBg={imgThree}
            >
            </Layout>
        </>
    );
};

export default NotFound;