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
import { Contraportada } from "@/components/contraportada";

export default function AIChallenge() {
  return (
    <SlidesDeck storageKey="atisa-challenge-slide">
      <Hero />
      <Oportunidad />
      <DatosChart />
      <Herramientas />
      <Propuesta />
      <TimelineVisual />
      <EvaluacionChart />
      <Premios />
      <Inversion />
      <Cta />
      <Contraportada />
    </SlidesDeck>
  );
}
