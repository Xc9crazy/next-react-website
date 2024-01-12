import Meta from 'components/meta';
import Hero from "components/hero";
import Container from "components/container";

export default function Home() {
  const subtitle = "アウトプットしていくサイト";
  return (
    <>
      <Container>
        <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </>
  );
}
