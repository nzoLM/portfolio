import CompetencesClient from "./CompetencesClient";

export const metadata = {
  title: "Compétences | Enzo LE MOAL",
  description: "Compétences RNCP de Enzo LE MOAL, développeur web fullstack, par projet.",
  alternates: {
    canonical: "/competences",
  },
};

export default function CompetencesPage() {
  return <CompetencesClient />;
}
