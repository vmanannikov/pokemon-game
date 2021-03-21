import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({isOpen, bgActive=false, onClickButton}) => {
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isOpen, [s.deactive]:!isOpen})}>
                    <span onClick={onClickButton}/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;