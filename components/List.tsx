

type ListParams = {description ?: string}

function List({description}: ListParams){
    return(
    <p>{description}</p>
    )
}

export default List;