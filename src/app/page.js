import { ServicesPrimary } from "@/components/services";
import Testimonials from "@/components/testimonials";
import '../styles/body.css'

export default function Home() {
  return (
    <>
      <section className="height text-center flex flex-col justify-center items-center gap-[10px]">
        <h1 className="text-3xl max-w-[1000px]"><strong>Empresa</strong>, Líder en establecer actividades empresariales!</h1>
        <p className="max-w-[900px]">Contenido explicativo sobre las actividades de la empresa y contenido importante y fundamental.</p>
      </section>
      <section className="text-center px-[10px] py-[50px]">
        <h2 className="text-3xl mb-[25px]">Nuestros Servicios!</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
        </div>
      </section>
      <section className="text-center px-[10px] py-[50px]">
        <h2 className="text-3xl mb-[25px]">Testimonios de Nuestros Clientes</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </section>
    </>
  );
}
