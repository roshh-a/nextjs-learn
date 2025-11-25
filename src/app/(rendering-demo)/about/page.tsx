import { cookies } from "next/headers"
const AboutPage = async () => {
    const cookieStore = cookies();
    const theme = (await cookieStore).get("theme");
    console.log(theme)
    console.log("About - server component")
    return <>
        <div>About page</div>
        <p>Current time {new Date().toLocaleTimeString()}</p>
    </>
}

export default AboutPage