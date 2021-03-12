import s from './style.module.css';
console.log('####: s', s);

const HeaderBlock = ({ title, hideBackground = false, descr }) =>{
    const styleRoot = hideBackground ? {backgroundImage: 'none'} : {};
    return (
        <div className={s.root} style={styleRoot}>
            <div className={s.container}>
                {
                    title && (<h1 className={s.header}>
                        {title}
                    </h1>)
                }
                {
                    descr && (<p className={s.paragraph}>{descr}</p>)
                }
            </div>
        </div>
    )
}

export default HeaderBlock;