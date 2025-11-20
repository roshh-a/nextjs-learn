// import LoginPage from "./(auth)/login/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold">Home</h2>
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
