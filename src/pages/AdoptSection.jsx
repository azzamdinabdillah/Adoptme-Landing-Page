import { CardPet } from '../components/Cards';

const AdoptSection = () => {
    return (
      <section className="px-8 md:px-20 lg:px-32 mt-10 md:mt-20 lg:mt-24">
        <div>
          <div className='md:w-[60%] lg:w-[40%]'>
            <p className="text-sm text-light-dark-color md:text-base uppercase">
              adoption pet
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[36px] lg:leading-relaxed md:leading-normal leading-normal font-medium mt-1 lg:w-[100%]">
              Adopt the pet that has waited too long
            </h1>

            <p className="mt-3 md:my-2 text-light-dark-color lg:text-[17px] md:text-lg lg:w-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac
              purus eget. Sit dolor est proin vestibulum, duis. im dolor sit
              amet, consectetur adipisci.
            </p>
          </div>

          <div className="mt-5 md:mt-8">
            <div className="flex justify-between items-center">
              <p className="text-dark-color">Scroll for more</p>
              <div className='relative'>
                <input
                  type="text"
                  placeholder="Filters"
                  className="border py-2 pl-5 rounded"
                />
                <img src="./images/filter.png" alt="" className='absolute right-2 top-1/2 -translate-y-1/2' />
              </div>
            </div>
            <div className=" mt-5 flex overflow-x-auto gap-3 lg:gap-5 md:gap-4 touch-auto pb-10 scrollbar-hide">
              <CardPet
                img={"./images/pet-1.png"}
                waiting={"180 Days waiting"}
                name={"Bruno"}
                age={"12 years old"}
              />
              <CardPet
                img={"./images/pet-2.png"}
                waiting={"28 Days waiting"}
                name={"Bruno"}
                age={"15 years old"}
              />
              <CardPet
                img={"./images/pet-3.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
              <CardPet
                img={"./images/pet-1.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
              <CardPet
                img={"./images/pet-2.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
              <CardPet
                img={"./images/pet-3.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
              <CardPet
                img={"./images/pet-4.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
              <CardPet
                img={"./images/pet-1.png"}
                waiting={"30 Days waiting"}
                name={"Bruno"}
                age={"20 years old"}
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default AdoptSection;