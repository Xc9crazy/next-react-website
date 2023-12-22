import styles from 'styles/hero.module.css'

function Decoration({ children }) {
    return <div>{children}</div>;
}

export default function Hero({title, subtitle,imageOn=false}) {
    return (
        <Decoration>
            <Decoration className={styles.flexContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p classNames={styles.subtitle}>{subtitle}</p>
            </Decoration>
            {imageOn && <figure>cube.jpg</figure>}
        </Decoration>
    );
}
