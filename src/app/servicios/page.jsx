import { ServicesSecondary, ServicesStar } from "@/components/services";
import '../globals.css'

export default function Servicios() {
    return (
        <>
            <section className="height flex flex-col justify-center items-center lg:pt-0 py-[50px]">
                <h2 className="text-3xl mb-[25px] text-center">Nuestros Servicios</h2>
                <p className="text-gray-600 text-center">Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades.</p>
                <div className="mt-[25px] flex flex-wrap justify-center items-center gap-[25px]">
                    <ServicesStar />
                    <ServicesStar />
                    <ServicesStar />
                </div>
                <div className="mt-[100px] flex flex-wrap justify-center items-center gap-[25px]">
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