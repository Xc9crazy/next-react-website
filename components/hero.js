function Decoration({ children }) {
    return <div style={{ color: "red" }}>{children}</div>;
}

export default function Hero({title, subtitle}) {
    return (
    <Decoration>
            <h1>{title}</h1>
            <p>{subtitle}</p>
    </Decoration>
    );
}
