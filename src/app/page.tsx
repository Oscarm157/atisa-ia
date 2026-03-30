import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Oportunidad } from "@/components/oportunidad";
import { Datos } from "@/components/datos";
import { Propuesta } from "@/components/propuesta";
import { Mecanica } from "@/components/mecanica";
import { Premios } from "@/components/premios";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="divide-y divide-card-border">
          <Oportunidad />
          <Datos />
          <Propuesta />
          <Mecanica />
          <Premios />
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
