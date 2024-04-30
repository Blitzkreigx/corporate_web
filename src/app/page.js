import { ServicesPrimary } from "@/components/services";
import Testimonials from "@/components/testimonials";
import '../app/globals.css'

export default function Home() {
  return (
    <>
      <section className="height text-center flex flex-col justify-center items-center gap-[10px] overflow-hidden text-white z-[100] relative">
        <h1 className="text-4xl max-w-[1000px]"><strong>Empresa</strong>, Líder en establecer actividades empresariales!</h1>
        <p className="max-w-[900px] text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum eaque quis laborum omnis, natus nihil est, minima voluptate cum pariatur magnam. Magni accusamus ipsa eveniet ut inventore repellat architecto?</p>
      </section>
      <div className="w-full absolute top-[70px] absolute-height overflow-hidden">
        <img src="./business-work.jpg" alt="Background" className="absolute -z-[100]" />
        <div className="bg-black bg-opacity-70 w-full absolute-height z-[50]"></div>
      </div>
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
