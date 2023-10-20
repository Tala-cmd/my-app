type HeaderParams = {   
    text ?: string
    textSub ?: string
}

function Header(props: HeaderParams) {
    return(
        <>
        <h1>{props.text}</h1>
        <h5>{props.textSub}</h5>
        </>
    )
}

export default Header;