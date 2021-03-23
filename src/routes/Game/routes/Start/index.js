import {useHistory} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import database, {fire} from "../../../../service/firebase";
import s from "./style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/firebaseContext";

const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    const getPokemons = async () =>{
        const response = await firebase.getPokemonsOnce();
        setPokemons(response);
    }

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })
        return () => firebase.offPokemonSocket();
    }, []);

    const handleActiveCard = (key, id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (item[0] === key) {
                    pokemon.active = !pokemon.active;
                };

                firebase.postPokemon(item[0], pokemon);

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleAddPokemon = () =>{
        const Obj = pokemons;
        console.log('####: Obj', Obj);

        firebase.addPokemon(Obj, async () => {
            await getPokemons();
        })
    }

    return (
        <>
            <div className={s.buttonWrap}>
                <button>ADD NEW POKEMON!</button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) =>
                        <PokemonCard
                            className={s.card}
                            key={key}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            isActive={true}
                            isSelected={selected}
                            onClickCard={handleActiveCard}
                        />)
                }
            </div>
        </>
    );
};

export default StartPage;