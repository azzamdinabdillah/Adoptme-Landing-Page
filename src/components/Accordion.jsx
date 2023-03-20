import { useState } from "react";

export const Accordion = (props) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="border-[.5px] border-[#A0BBD7]">
        <div
          className="bg-white px-5 py-5 overflow-hidden cursor-pointer hover:bg-opacity-30"
          onClick={() => setOpen(!open)}
        >
          <div className="flex justify-between items-center gap-10">
            <p className="text-dark-color"> <span className="font-bold">+</span> &nbsp; {props.title}</p>
            <img
              className={open ? "rotate-180 transition-all" : ""}
              src="./images/arrow-down.png"
              alt=""
            />
          </div>
        </div>
        <div
          style={open ? { transition: ".3s" } : {}}
          className={
            open
              ? "h-[20vh] md:h-[8vh] lg:h-[15vh] bg-white px-5 pt-3 rounded-b-md overflow-hidden"
              : "h-0 overflow-hidden"
          }
        >
          <p className="text-light-dark-color">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
