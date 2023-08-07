import { useEffect, useState } from "react"
import { Button } from '@mui/material'
export const Autogestion = () => {
    const [data, setData] = useState()

    const getData = async () => {
        const response = await fetch('https://randomuser.me/api/?results=10')
        const data = await response.json()
        setData(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Button variant="outlined" onClick={getData}>Get Data</Button>
        </>
    )
}
