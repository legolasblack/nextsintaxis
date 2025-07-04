import { reportWebVitals } from "next/dist/build/templates/pages";
import ContainerFlex from "./componentes/ContainerFlex";
import ContainerCard from "./componentes/ContainerCard";

// app/page.tsx
export default function HomePage() {
  return (<>

    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Bienvenido a la seccion de practicas de Css puro</h1>
      <p className="text-lg">Este es un ejemplo básico de una página.</p>
      <div className="container">
        <p className="item-container">hello container</p>
      </div>
    </section>
    <ContainerFlex >
      <p>hello container</p>
    </ContainerFlex>

<ContainerCard/>
  </>
  );
}
