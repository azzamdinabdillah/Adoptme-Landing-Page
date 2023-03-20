import { useState } from "react";
import { ButtonDark, ButtonGhost } from "./Button";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let openNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="py-2 md:py-5 lg:py-5 fixed w-full z-10 backdrop-blur-sm bg-opacity-30 lg:px-20 overflow-hidden">
      <div className="flex justify-between items-center px-8">
        <div className="w-[30%] md:w-[15%] lg:w-[8%]">
          <div className="flex items-center gap-20">
            <div className="flex items-center">
              <h1 className="text-xl">Adoptme</h1>
              <img src="./images/kaki.png" alt="" className="scale-50" />
            </div>

            <div className="hidden lg:flex justify-center items-center gap-10 text-dark-color">
              <p className="w-full">Home</p>
              <p className="w-full">Adoptions</p>
              <p className="w-full">Community</p>
              <p className="w-full">Stories</p>
              <p className="w-full">FAQ</p>
            </div>
          </div>
        </div>
        <img
          src="./images/menu.png"
          alt=""
          onClick={openNavbar}
          className="lg:hidden scale-75"
          style={
            open
              ? { transform: "rotate(90deg) scale(.8)", transition: ".3s" }
              : {}
          }
        />

        {/* navbar large screen */}
        <div className="hidden lg:block">
          <div className="flex items-center">
            <img src="./images/search.png" alt="" />
            <ButtonGhost name={"Sign In"} />
            <ButtonDark name={"Sign Up"} />
          </div>
        </div>
      </div>
      <div
        style={
          open
            ? {
                height: "300px",
                transition: ".5s",
                overflow: "hidden",
              }
            : { height: "0px", overflow: "hidden" }
        }
        className={open == false ? "backdrop-blur-md bg-opacity-30" : ""}
      >
        <div className="py-5 px-10 flex flex-col gap-4 text-dark-color font-bold text-lg">
          <p className="w-full">Home</p>
          <p className="w-full">Adoptions</p>
          <p className="w-full">Community</p>
          <p className="w-full">Stories with pet</p>
          <p className="w-full">FAQ</p>

          <div className="mt-2 flex items-center gap-7">
            <img src="./images/search.png" alt="" />
            <ButtonGhost name={"Sign In"} />
            <ButtonDark name={"Sign Up"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
