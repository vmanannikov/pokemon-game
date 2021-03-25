import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import database from "../../service/firebase";
import s from "../Game/style.module.css";
import PokemonCard from "../../components/PokemonCard";

const GamePage = () => {
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    const setRandomId = () =>{
        const keyId = Math.random();
        return keyId;
    }

    const getPokemons = () =>{
        database.ref('pokemons').once('value', (snapshot) =>{
            setPokemons(snapshot.val());
        });
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const handleActiveCard = (key, id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (item[0] === key) {
                    pokemon.active = !pokemon.active;
                };

                database.ref('pokemons/'+ item[0]).set(pokemon);

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleAddPokemon = () =>{
        const Obj = pokemons;
        console.log('####: Obj', Obj);

        const Keys = Object.keys(pokemons);
        console.log('####: Keys', Keys);

        const newKey = database.ref().child('pokemons').push().key;
        console.log('####: newKey', newKey);

        database.ref('pokemons/' + newKey).set(Obj[Keys[Keys.length - 1]]);
        getPokemons();
    }

    return (
        <>
            <div>
                <div className={s.container}>
                    <button className={s.button} onClick={handleAddPokemon}>ADD NEW POKEMON!</button>
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