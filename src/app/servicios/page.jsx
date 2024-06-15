import { ServicesSecondary, ServicesStar } from "@/components/services";
import '../globals.css'

export default function Servicios() {
    return (
        <>
            <section className="height text-center flex flex-col justify-center items-center gap-[10px] overflow-hidden text-white z-20 relative p-[10px]">
              <h1 className="text-4xl max-w-[1000px]">Todos nuestros servicios se adaptan a tus necesidades.</h1>
            </section>
            <div className="w-full absolute top-0 overflow-hidden h-screen z-10">
              <img src="./business-work4.jpg" alt="Background" className="absolute -z-[100] w-full h-full object-cover" />
              <div className="bg-black bg-opacity-70 w-full h-full z-[50]"></div>
            </div>
            <section className="flex flex-col justify-center items-center lg:pt-0 py-[50px]">
                <h2 className="text-3xl mb-[20px] mt-[50px] text-center">Nuestros Servicios</h2>
                <p className="text-gray-600 text-center">Nuestros mejores servicios, con más demanda y completos en todos los sectores.</p>
                <div className="mt-[25px] flex flex-wrap justify-center items-center gap-[25px]">
                    <ServicesStar />
                    <ServicesStar />
                    <ServicesStar />
                </div>
                <div className="mt-[125px] flex flex-wrap justify-center items-center gap-[25px]">
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                    <ServicesSecondary />
                </div>
            </section>
        </>
    );
}