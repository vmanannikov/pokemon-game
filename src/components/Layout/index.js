import s from './style.module.css';
import * as url from "url";

const Layout = ({title, descr, urlBg = false, colorBg = false}) =>{
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
                    <div className={s.desc}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;