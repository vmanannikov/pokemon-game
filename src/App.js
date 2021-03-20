import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import ContactPage from "./routes/Contact";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import cn from 'classnames';
import s from './style.module.css';
import AboutPage from "./routes/About";
import NotFound from "./routes/NotFound";

const App = () =>{
    const match = useRouteMatch('/');
    console.log('####: match', match);
    return (
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact}/>
                         <div className={cn(s.wrap, {
                             [s.IsHomePage]: match.isExact
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
    )
};

export default App;