import StartPage from './routes/Start';
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";

import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import {PokemonContext} from "../../context/pokemonContext";

const GamePage = () => {
    const match = useRouteMatch();
    return (
        //<PokemonContext>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        //</PokemonContext>
    );
};

export default GamePage;