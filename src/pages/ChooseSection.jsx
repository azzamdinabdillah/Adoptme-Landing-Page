import { MainText } from "../components/MainText";

const ChooseSection = () => {
    return (
        <section className="px-8 pt-10 md:pt-20 lg:pt-20 md:px-20 lg:px-32">
            <div className="md:grid grid-cols-2 items-center md:gap-14 lg:gap-10">
                <div className="">
                    <p className="text-sm text-light-dark-color md:text-base">OUR MISSION FOR PET</p>
                    <h1 className="font-medium text-dark-color-2 text-2xl leading-normal md:leading-relaxed mt-1 md:text-3xl lg:text-[36px] lg:w-[80%]">Lets Choose and Adopt your New Lovely Pet</h1>
                </div>

                <div>
                    <p className="text-light-dark-color mt-2 lg:text-[20px]">You need to see some pets in Adoptme. We have the friend that's you need to have. We also have the equipment you need to take care of it.</p>
                </div>
            </div>

            <div className="mt-10 md:mt-20 lg:flex gap-32 justify-between items-center">
                <div className="relative md:block md:mx-auto md:w-[50%] lg:scale-75 lg:w-full">
                    <img src="./images/choose-pet-1.png" alt="" className="border-8 border-white shadow-2xl lg:w-full" />
                    <img src="./images/choose-pet-2.png" alt="" className="border-8 border-white shadow-2xl absolute top-1/2 -translate-y-1/2 -right-8 md:-right-20 lg:-right-20 lg:scale-125" />
                    <img src="./images/choose-pet-3.png" alt="" className="border-8 border-white shadow-2xl absolute -bottom-16 -left-0 md:-left-28 scale-75 md:scale-90 lg:scale-100" />
                </div>
                <div className="mt-20 lg:mt-0 md:mt-28 md:w-[100%] md:flex justify-center items-start gap-20 lg:block lg:-translate-x-10">
                    <MainText text1={"adoptme community"} text2={"Connect with adoptme across the country"} text3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consec."}  />

                    <div className="grid grid-cols-2 lg:grid-cols-3 flex-col justify-start items-start mt-5 lg:mt-10 gap-10">
                        <div className="flex flex-col gap-2 lg:items-center">
                            <h1 className="text-2xl text-dark-color-2 ">150+</h1>
                            <p className="lg:text-center text-sm text-light-dark-color">proin vestibulum, duis. im dol.</p>
                        </div>
                        <div className="flex flex-col gap-2 lg:items-center">
                            <h1 className="text-2xl text-dark-color-2 ">2K+</h1>
                            <p className="lg:text-center text-sm text-light-dark-color">proin ulduis. isimuim dol.</p>
                        </div>
                        <div className="flex flex-col gap-2 lg:items-center">
                            <h1 className="text-2xl text-dark-color-2 ">3K+</h1>
                            <p className="lg:text-center text-sm text-light-dark-color">proin vestibulum, duis. im dol.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseSection;