import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import database from "../../service/firebase";
import s from "../Game/style.module.css";
import PokemonCard from "../../components/PokemonCard";

const GamePage = () => {
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
       database.ref('pokemons').once('value', (snapshot) =>{
           setPokemons(snapshot.val());
       })
    }, []);

    const handleActiveCard = (key, id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === key) {
                    pokemon.active = true;
                    database.ref('pokemons/' + key).update({
                        active: pokemon.active
                    }, (error) =>{
                        console.log('####: error', error.message);
                    })
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleClickButton = () =>{
        history.push('/');
    }

    return (
        <>
            <div>
                <div className={s.container}>
                    <button className={s.button} onClick={handleClickButton}>Back to Home Page!</button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
                            <PokemonCard
                                keyId={key}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                isActive={active}
                                onClickCard={handleActiveCard}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default GamePage;