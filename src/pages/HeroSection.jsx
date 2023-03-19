import { ButtonDark } from "../components/Button";

const HeroSection = () => {
    return (
        <section className="px-8 pb-14 bg-opacity-25 md:px-20 md:py-20 lg:px-32" style={{ 
            backgroundImage: "linear-gradient(to top, #eaeff6, #e7eaf0, #e4e6eb, #e1e1e5, #dddddf, #dddee0, #dedee0, #dedfe1, #e2e4e8, #e5e9ef, #e9eff6, #ecf4fd)"
         }}>
            <div className="lg:flex flex-row-reverse gap-10 items-center">
            <div className="pt-10">
                <img src="./images/hero-image.png" alt="" className="mx-auto md:w-[70%] lg:w-[100vw] lg:translate-x-10" />
            </div>

            <div className="mt-10 md:w-[100%] lg:w-[100%]">
                <h1 className="text-3xl md:text-4xl lg:text-[54px] lg:leading-relaxed font-medium md:w-[80%] lg:w-full">Lets Choose and <span className="ml-2"><img src="./images/kaki.png" alt="" className="inline scale-90" /></span> Adopt your new Pet</h1>

                <p className="my-6 md:my-5 text-light-dark-color lg:text-[20xp] md:text-lg md:w-[80%] lg:w-[80%]">Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
                {/* <div className="md:flex justify-start items-start gap-10">
                </div> */}
                <div className="flex items-center gap-5 ">
                    <ButtonDark name="Adopt Now" />
                    <button className="text-dark-color font-bold">Donate For Food</button>
                </div>

                <div className="mt-8">
                    <h1 className="text-dark-color font-bold">SUPPORTED BY :</h1>
                    <div className="flex items-center gap-5 mt-3 lg:mt-5">
                        <img src="./images/sponsor-1.png" alt="" />
                        <img src="./images/sponsor-2.png" alt="" />
                        <img src="./images/sponsor-3.png" alt="" />
                        <img src="./images/sponsor-4.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection;