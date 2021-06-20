const Button = ({color, backgroundColor, width, text, height, onClick, border, display}) => {
    return(
        <button style={{color: color, backgroundColor: backgroundColor, width: width, height: height, border: border,  borderRadius: "5px", display: display}} onClick={onClick}>{text}</button>
    )
}

export default Button