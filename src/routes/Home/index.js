import Header from "../../components/Header";
import Layout from "../../components/Layout";

import imgThree from '../../assets/bg3.jpg';

const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) =>{
        onChangePage && onChangePage(page);
    }
    return (
        <>
            <Header
                title="Pokemon Game"
                descr="This is new card game"
                onClickButton={handleClickButton}
            />
            <Layout
                id = "rules"
                title="Rules"
                urlBg={imgThree}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            </Layout>
        </>
    );
}
export default HomePage;