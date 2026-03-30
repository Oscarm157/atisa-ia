import { SlidesDeck } from "@/components/slides-deck";
import { Hero } from "@/components/hero";
import { Oportunidad } from "@/components/oportunidad";
import { Quote } from "@/components/quote";
import { Datos } from "@/components/datos";
import { Datos2 } from "@/components/datos2";
import { Propuesta } from "@/components/propuesta";
import { Mecanica } from "@/components/mecanica";
import { Mecanica2 } from "@/components/mecanica2";
import { Premios } from "@/components/premios";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <SlidesDeck>
      <Hero />
      <Oportunidad />
      <Quote />
      <Datos />
      <Datos2 />
      <Propuesta />
      <Mecanica />
      <Mecanica2 />
      <Premios />
      <Cta />
    </SlidesDeck>
  );
}
