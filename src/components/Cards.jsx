export const CardPet = (props) => {
    return (
      <div className="flex-none w-[80%] md:w-[30%] lg:w-[20%]">
        <div className="border-2 p-2 shadow-lg rounded-md">
          <div className="relative">
            <img
              src={props.img}
              alt=""
              className="w-full brightness-75 rounded-md"
            />
            <p className="absolute bottom-0 py-5 text-white text-center w-full">
              {props.waiting}
            </p>
          </div>
          <div className="text-center py-3">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
          </div>
        </div>
      </div>
    );
}
