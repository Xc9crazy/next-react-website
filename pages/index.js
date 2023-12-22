import Hero from "components/hero";
import Container from "components/container";

export default function Home() {
  const subtitle = "アウトプットしていくサイト";
  return (
    <>
      <Container>
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </>
  );
}
