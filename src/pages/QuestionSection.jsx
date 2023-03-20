import { Accordion } from "../components/Accordion";

const QuestionSection = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage:
          "linear-gradient(to top, #eaeff6, #e7eaf0, #e4e6eb, #e1e1e5, #dddddf, #dddee0, #dedee0, #dedfe1, #e2e4e8, #e5e9ef, #e9eff6, #ecf4fd)",
      }}
    >
      <div className="pt-10 lg:mt-10 mt-10 px-8 md:px-20 lg:px-32">
        <div className="md:py-10 lg:py-5">
          <h1 className="uppercase text-light-dark-color font-bold text-center text-sm">
            Forum answer and question
          </h1>
          <p className="text-center text-3xl md:text-4xl md:w-[70%] lg:w-[40%] md:mx-auto md:py-3 md:leading-normal lg:text-[36px] py-2 leading-normal text-dark-color-2">
            Adopt the pet that has waited too long
          </p>
          <p className="text-center text-lg py-2 leading-normal text-light-dark-color md:w-[70%] lg:w-[50%] md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus
            eget. Sim dolor sit amet, consectetur adipisci.
          </p>
        </div>

        <div className="lg:mt-14">
          <div className="mt-5 lg:mt-0 lg:grid grid-cols-2 gap-20">
            <div className="rounded-xl overflow-auto">
              <Accordion
                title={"How to adopt a pet"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={"How long does the process take to adopt?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={"How much should i spend to adopt?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={"Where is my nearest adoption place?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
            </div>
            <div className="mt-5 lg:mt-0 rounded-xl overflow-hidden">
              <Accordion
                title={"Does adopt me also sell my dog ​​needs?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={
                  "Was I given an official adoption letter when I adopted?"
                }
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={"What are the requirements for adopting a pet?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
              <Accordion
                title={"What kind of care should I give my pet?"}
                description={
                  "If you want to adopt an animal. Before u came to Adoptme, please make an account or login. Set your date to came, we will make a note on the daily guest list."
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-color mt-16">
        <div className="px-8 md:px-20 py-8 md:py-10 lg:py-8 text-dark-color-2 font-bold md:flex justify-between">
        <p>Copyright 2023. Adoptme. All right reserved</p>
        <p className="mt-2 md:mt-0">081999236495 | adoptme@email.com</p>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
