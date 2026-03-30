import { SlidesDeck } from "@/components/slides-deck";
import { GovHero } from "@/components/governance/gov-hero";
import { GovProblema } from "@/components/governance/gov-problema";
import { GovFases } from "@/components/governance/gov-fases";
import { GovRutaCritica } from "@/components/governance/gov-ruta-critica";
import { GovKpis } from "@/components/governance/gov-kpis";
import { GovCta } from "@/components/governance/gov-cta";

export default function AIGovernance() {
  return (
    <SlidesDeck storageKey="atisa-gov-slide">
      <GovHero />
      <GovProblema />
      <GovFases />
      <GovRutaCritica />
      <GovKpis />
      <GovCta />
    </SlidesDeck>
  );
}
