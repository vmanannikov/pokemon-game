import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import database from "../../service/firebase";
import s from "../Game/style.module.css";
import PokemonCard from "../../components/PokemonCard";

const DATA = {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
    }
};

const GamePage = () => {
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

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
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };

                database.ref('pokemons/'+ item[0]).set(pokemon);

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleClickButton = () =>{
        history.push('/');
    }

    const handleAddPokemon = () =>{
        const data = DATA;
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/'+ newKey).set(data).then(() => getPokemons());
    }

    return (
        <>
            <div>
                <div className={s.container}>
                    <button className={s.button} onClick={handleClickButton}>Back to Home Page!</button>
                    <button className={s.button} onClick={handleAddPokemon}>Add new Pokemon!</button>
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