import s from './style.module.css';
import cn from 'classnames';

const Layout = ({title, urlBg = false, colorBg = false, children}) =>{
    const styleRoot = {
        backgroundColor: colorBg,
        backgroundImage: `url(${urlBg})`
    }
    return (
        <section className={s.root} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;