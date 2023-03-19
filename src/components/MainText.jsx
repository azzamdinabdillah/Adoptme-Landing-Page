export const MainTextHeader = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl lg:text-[54px] lg:leading-relaxed font-medium">Lets Choose and <span className="ml-2"><img src="./images/kaki.png" alt="" className="inline scale-90" /></span> Adopt your new Pet</h1>

            <p className="my-6 md:my-5 text-light-dark-color lg:text-[20xp] md:text-lg lg:w-[80%]">Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.</p>
        </div>
    )
}

export const MainText = (props) => {
    return (
        <div>
            <p className="text-sm text-light-dark-color md:text-base uppercase">{props.text1}</p>
            <h1 className="text-3xl md:text-4xl lg:text-[36px] lg:leading-relaxed leading-normal md:leading-normal font-medium mt-1 lg:w-[100%] md:w-[100%]">{props.text2}</h1>

            <p className="mt-3 md:my-2 text-light-dark-color lg:text-[17px] md:text-lg lg:w-[100%] md:w-[100%]">{props.text3}</p>
        </div>
    )
}