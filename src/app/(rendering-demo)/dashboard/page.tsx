'use client';
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [name, setName] = useState<string>("Rosh");
    console.log("Dashboard - client component")
    useEffect(() => {
        setName("Roshini");
    }, [])
    return <>
        <h1 className="text-2xl">About</h1>
        <div>Welcome {name}</div>
    </>
}

export default Dashboard