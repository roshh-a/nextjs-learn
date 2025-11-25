import { auth, currentUser } from "@clerk/nextjs/server";

const Page = async () => {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log({ authObj, userObj });
    return <>
        <h1>Clerk demo</h1>
    </>
}

export default Page;