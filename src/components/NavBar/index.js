import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({isActive, onClickButton}) => {
    const handleClick = (event)=>{
        onClickButton && onClickButton();
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive, [s.deactive]:!isActive})}>
                    <span onClick={handleClick}/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;