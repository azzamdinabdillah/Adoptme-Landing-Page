export const ButtonDark = (props) => {
    return (
        <button className="text-white px-5 lg:px-10 py-3 bg-dark-color text-medium rounded-sm">
            {props.name}
        </button>
    )
}

export const ButtonGhost = (props) => {
    return (
        <button className="text-dark-color-2 px-5 lg:px-10 py-3 text-medium rounded-sm">
            {props.name}
        </button>
    )
}
