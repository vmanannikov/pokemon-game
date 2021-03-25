import {useLocation, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import ContactPage from "./routes/Contact";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import cn from 'classnames';
import AboutPage from "./routes/About";
import NotFound from "./routes/NotFound";
import {FireBaseContext} from "./context/firebaseContext";
import FireBase from "./service/firebase";

import s from './style.module.css';

const App = () =>{
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';
    return (
        <FireBaseContext.Provider value={new FireBase()}>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>
                        <div className={cn(s.wrap, {
                            [s.IsHomePage]: isPadding
                        })}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/home" component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route render={()=>(
                                    <Redirect to='/404'/>
                                )}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )
};

export default App;