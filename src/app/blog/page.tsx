import Link from "next/link";

const page = async () => {
    // const blogData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("delay");
        }, 2000);
    })
    return <>
        <Link href='/' className="underline cursor-pointer text-blue-600">Home</Link>
        <div> Blog page is loaded</div>
    </>
}

export default page;