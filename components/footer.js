import Container from "components/container";
import Logo from "components/logo";
import styles from "styles/footer.module.css";

export default function Footer() {
    return (
        <footer classname={styles.wrapper}>
            <Container>
        <div classname={styles.flexContainer}>
        <Logo />
                </div>
            </Container>
    </footer>
    );
}
