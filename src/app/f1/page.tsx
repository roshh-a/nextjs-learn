import Link from "next/link";

// #region Intercepting the routes
// F1 is the parent
const page = () => {
    return <>
        <h3 className="text-lg">F1</h3>
        <Link href={"/f1/f2"} className="cursor-pointer">Link to F2</Link><br></br>
        <Link href={"/f3"} className="cursor-pointer">Link to F3</Link>
    </>
}

export default page;