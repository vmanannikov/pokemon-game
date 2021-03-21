import Menu from "../Menu";
import NavBar from "../NavBar";
import { useState } from 'react';

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickButton = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <Menu isOpen={isOpen} onClickButton={handleClickButton}/>
            <NavBar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickButton={handleClickButton}
            />
        </>
    );
};

export default MenuHeader;