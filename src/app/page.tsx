import { SlidesDeck } from "@/components/slides-deck";
import { Hero } from "@/components/hero";
import { Oportunidad } from "@/components/oportunidad";
import { DatosChart } from "@/components/datos-chart";
import { Herramientas } from "@/components/herramientas";
import { Propuesta } from "@/components/propuesta";
import { EvaluacionChart } from "@/components/evaluacion-chart";
import { Inversion } from "@/components/inversion";
import { Premios } from "@/components/premios";
import { TimelineVisual } from "@/components/timeline-visual";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <SlidesDeck>
      <Hero />
      <Oportunidad />
      <DatosChart />
      <Herramientas />
      <Propuesta />
      <EvaluacionChart />
      <Inversion />
      <Premios />
      <TimelineVisual />
      <Cta />
    </SlidesDeck>
  );
}
