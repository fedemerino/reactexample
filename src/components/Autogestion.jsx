import { useEffect, useState } from "react"
import { Button } from '@mui/material'
import { CustomButton } from "../assets/CustomButton"
export const Autogestion = () => {
    const [data, setData] = useState()

    const getData = async () => {
        const response = await fetch('https://randomuser.me/api/?results=10/')
        const data = await response.json()
        setData(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className="autogestionContainer">
            <Button variant="outlined" onClick={getData}>Get Data</Button>
            <CustomButton variant="outlined" innerText="Custom Button" color={"#64ffda"} bgHover={"rgba(100,255,218,0.1)"} />
        </div>
    )
}
