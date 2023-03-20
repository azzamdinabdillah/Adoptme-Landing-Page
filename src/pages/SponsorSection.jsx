import { ButtonDark } from "../components/Button";
import { MainText } from "../components/MainText";

const SponsorSection = () => {
  return (
    <section className="px-8 md:py-20 md:px-20 lg:px-32">
      <div className="lg:grid grid-cols-2 items-center justify-between gap-28">
        <div className="">
          <img
            src="./images/pet-5.png"
            alt=""
            className="md:mx-auto border-8 border-white shadow-xl md:w-[60%] lg:w-[90%]"
          />
        </div>
        <div className="mt-10">
          <div className="md:w-[80%]">
            <MainText
              text1={"Stories with pet"}
              text2={"Sponsoring your pet before adopt"}
              text3={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisc."
              }
            />
          </div>

          <div className="mt-5">
            <ButtonDark name={"Sponsor Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
