import Layout from "./components/Layout";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Section from "./components/Section";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Dot from "./components/Dot";
import Badge from "./components/Badge";
import Stat from "./components/Stat";

export default function Home() {
  return (
    <Layout>
      <SiteHeader links={[{ label: "Home", href: "/" }]} />
      <Section spacing="hero" className="flex flex-col gap-6 h-screen">
        <Badge>Available from January 2027</Badge>
        <Heading as="h1">Nick Douglas</Heading>
        <div className="max-w-2xl flex flex-col gap-4">
          <Text variant="lead">
            A passionate frontend web developer building great things for the
            web
            <Dot />
          </Text>
          <Text>
            I&apos;m a senior freelance frontend developer based in the UK.
            I&apos;ve been building for the web for over two decades, from
            agency sites in Shoreditch to complex Vue and Nuxt applications for
            insurers, lenders and telecoms. I enjoy the hard middle bit of a
            product: forms, data-heavy interfaces and the component libraries
            that hold them together.
          </Text>
        </div>
        <div className="flex gap-20">
          <Stat value={23} label="years building for the web" />
          <Stat value={14} label="contracts" />
          <Stat value={12} label="sectors" />
        </div>
      </Section>
      <Section id="work">…</Section>
      <SiteFooter />
    </Layout>
  );
}
