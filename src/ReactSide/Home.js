import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
    const [backData, setBackData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/home")
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setBackData(res.data)
            })
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <h3>
            {
                backData.map((item, i) => {
                    {console.log(item)}
                    <li key="i">{item}</li>
                })
            }
            </h3>
        </div>
    )
}

export default Home