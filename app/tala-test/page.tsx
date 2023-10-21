'use client'
import {useState, useEffect} from 'react'

function TalaTest(){
    const [resourceType, setResourceType] = useState('')

    useEffect(() =>{
    console.log('render')
    
    }, [resourceType])
return(
    <>
    <button onClick={() => setResourceType('Posts')}>Posts</button>
    <button onClick={() => setResourceType('Users')}>Users</button>
    <button onClick={() => setResourceType('Comments')}>Comments</button>
    <h2>{resourceType}</h2>
    </>
    
    )
}

export default TalaTest;