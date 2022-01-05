import Layout from "../components/layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <Layout title={"Ivan's Site"}>
      <Hero />
      <AboutMe />
    </Layout>
  );
}
