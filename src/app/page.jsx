import { ServicesPrimary } from "@/components/services";
import Testimonials from "@/components/testimonials";
import '../app/globals.css'

export const metadata = {
  title: "Empresa | Business",
  description: "Descripción de la empresa",
  keywords: "business template",
};

export default function Home() {
  return (
    <>
      <section className="height text-center flex flex-col justify-center items-center gap-[10px] overflow-hidden text-white z-20 relative p-[10px]">
        <h1 className="text-4xl max-w-[1000px]"><strong>Empresa</strong>, líder en servicios de sector mexicano</h1>
        <p className="max-w-[900px] text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum eaque quis laborum omnis, natus nihil est, minima voluptate cum pariatur magnam. Magni accusamus ipsa eveniet ut inventore repellat architecto</p>
      </section>
      <div className="w-full absolute top-0 overflow-hidden h-screen z-10">
        <img src="./business-work.jpg" alt="Background" className="absolute -z-[100] w-full h-full object-cover" />
        <div className="bg-black bg-opacity-70 w-full h-full z-[50]"></div>
      </div>
      <section className="text-center px-[10px] min-h-screen flex flex-col justify-center items-center gap-[30px]">
        <h2 className="text-5xl">Nuestro Enfoque</h2>
        <p className="max-w-[900px] mx-auto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis expedita deleniti distinctio, quisquam nobis suscipit vel, impedit odit architecto alias veniam Praesentium molestias ipsum suscipit. Molestias itaque dignissimos dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat non natus consectetur maiores quo autem quisquam molestias iure tempora</p>
        <a href="/acerca-de" className="button hover:bg-black text-white py-[10px] px-[50px] rounded-[5px]">Más información</a>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen px-[10px]">
        <div className="flex justify-center items-center">
          <img src="./image1.jpg" alt="" className="max-w-[90%]" />
        </div>
        <div className="flex flex-col justify-center items-start gap-[10px] p-[25px]">
          <h2 className="text-4xl max-w-[90%]">Siempre lo mejor para tí</h2>
          <p className="max-w-[90%] text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet odio illum vitae. Tempora est corrupti sequi unde commodi nulla nemo, neque ratione at. Praesentium tempore porro, debitis nemo repellendus quaerat.</p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen px-[10px]">
        <div className="flex flex-col justify-center items-start gap-[10px] p-[25px]">
          <h2 className="text-4xl max-w-[90%]">Atención física y online</h2>
          <p className="max-w-[90%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis aspernatur, nam harum et ab quasi atque. Ipsam illum non consequatur quasi. Distinctio corrupti nam consectetur iusto magni officia tempore.</p>
        </div>
        <div className="w-full box-border p-[10px] flex justify-center items-center">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.022192997261!2d-99.1469766092358!3d19.433758444840947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!2sCentro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1713647120259!5m2!1ses-419!2smx" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[90%] mx-auto min-h-[60vh] bg-gray-100"
          >
          </iframe>
        </div>
      </section>
      <section className="text-center px-[10px] min-h-screen my-[50px]">
        <h2 className="text-4xl mb-[25px] mt-[50px]">Nuestros servicios</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
          <ServicesPrimary />
        </div>
      </section>
      <section className="text-center px-[10px] min-h-screen my-[50px]">
        <h2 className="text-4xl mb-[25px] mt-[50px]">Testimonios de nuestros clientes</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-[25px]">
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </section>
      <section className="text-center px-[10px] min-h-screen flex flex-col justify-center items-center contact">
        <h2 className="text-5xl">Contacta ahora mismo con nuestro equipo</h2>
          <a href="/contacto" className="button hover:bg-black text-white py-[10px] px-[50px] rounded-[5px] my-[15px]">Contactar ahora</a>
      </section>
    </>
  );
}
