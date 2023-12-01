import styles from 'styles/hero.module.css'

function Decoration({ children }) {
    return <div style={{ color: "red" }}>{children}</div>;
}

export default function Hero({title, subtitle,imageOn=false}) {
    return (
        <Decoration>
            <Decoration className={styles.flexContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p classNames={styles.subtitle}>{subtitle}</p>
            </Decoration>
            {imageOn && <figure>[画像]</figure>}
        </Decoration>
    );
}
