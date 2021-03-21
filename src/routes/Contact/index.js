import Layout from "../../components/Layout";
import imgOne from "../../assets/bg1.jpg";

const ContactPage = () => {
    return (
        <>
            <Layout
                id="contact"
                title="Contact Information"
                urlBg={imgOne}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
            </Layout>
        </>
    );
};

export default ContactPage;