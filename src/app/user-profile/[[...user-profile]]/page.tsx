import { UserProfile } from "@clerk/nextjs"

const userProfile = () => {
    return <>
        <div className="cursor-pointer text-2xl font-bold underline">
            <UserProfile path="/user-profile" />
        </div>
    </>
}

export default userProfile