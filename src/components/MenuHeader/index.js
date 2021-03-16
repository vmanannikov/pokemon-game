import cn from 'classnames';
import Menu from "../Menu";
import NavBar from "../NavBar";
import { useState } from 'react';

//PR HW4
const MenuHeader = () => {
    const [isActive, setActive] = useState(null);

    const handleClickButton = () => {
        if(isActive === null){
            setActive(true);
        } else {
            setActive(!isActive)
        }
    }

    return (
        <div>
            <Menu
                isActive={isActive}
                onClickButton={handleClickButton}
            />
            <NavBar
                 isActive={isActive}
                 onClickButton={handleClickButton}
            />
        </div>
    );
};

export default MenuHeader;