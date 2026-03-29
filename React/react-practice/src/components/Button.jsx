function Button({ text, variant }) {
    return (
        <>
            <button className={variant}>{text}</button>
        </>
    )

}
export default Button;