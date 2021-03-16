import s from './style.module.css';

const GamePage = ({onChangePage}) => {
    const handleClickButton = () =>{
        onChangePage && onChangePage('app');
    }
    return (
        <div>
            This is Game Page!
            <button onClick={handleClickButton}>
                Back to Home Page!
            </button>
        </div>
    );
};

export default GamePage;