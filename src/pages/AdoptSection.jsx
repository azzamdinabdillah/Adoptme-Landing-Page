import { CardPet } from '../components/Cards';

const AdoptSection = () => {
    return (
        <section className="px-8 md:px-20 lg:px-32 mt-10">
            <div>
                <div>
                    <p className="text-sm text-light-dark-color md:text-base uppercase">adoption pet</p>
                    <h1 className="text-3xl md:text-4xl lg:text-[36px] lg:leading-relaxed leading-normal font-medium mt-1 lg:w-[100%]">Adopt the pet that has waited too long</h1>

                    <p className="mt-3 md:my-5 text-light-dark-color lg:text-[17px] md:text-lg lg:w-[100%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci.</p>
                </div>

                <div className='mt-10'>
                    <CardPet/>
                </div>
            </div>
        </section>
    )
}

export default AdoptSection;