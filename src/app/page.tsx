// import LoginPage from "./(auth)/login/page";
import Link from "next/link";
import AboutPage from "./(rendering-demo)/about/page";
import { SignInButton, SignedIn, SignOutButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="col grid-cols-1">
        <div className="flex justify-between gap-2">
          <SignedOut>
            <div className="cursor-pointer text-2xl font-bold underline">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>
          <SignedIn>
            <Link href='/user-profile'>Profile</Link>
            {/* <div className="cursor-pointer text-2xl font-bold underline">
              <UserButton />
            </div> */}
            <div className="cursor-pointer text-2xl font-bold underline">
              <SignOutButton />
            </div>
          </SignedIn>
        </div>
      </div>
      <h2 className="text-xl font-bold">Home</h2>
      < AboutPage />
      <ul>
        <li><Link href='/blog' className="underline cursor-pointer text-blue-600">Blog</Link></li>
        <li><Link href='/products' className="underline cursor-pointer text-blue-600">Products</Link></li>
        <li><Link href='/articles/breaking-news-123?lang=en' className="underline cursor-pointer text-blue-600">Read in eng</Link></li>
        <li><Link href='/articles/breaking-news-123?lang=jp' className="underline cursor-pointer text-blue-600">Read in jap</Link></li>
      </ul>
    </>
    // <LoginPage></LoginPage>
  );
}
