import Link from "next/link";

type Role = "Admin" | "SuperAdmin" | "Editor"

const User = {
    Admin: true,
    Editor: false,
    SuperAdmin: false,
    // Delete: true
} satisfies Record<Role, boolean>

console.log("person", User);

const newsArticle = async ({ params, searchParams }:
    {
        params: { articlesId: string },
        searchParams: { lang?: 'en' | 'fr' | 'jp' }
    }
) => {
    //"{"articlesId":"breaking-news-123"}"
    const { articlesId } = await params;
    const { lang = 'en' } = await searchParams;
    return (
        <>
            <div>News {articlesId}</div>
            <p>Reading in {lang}</p>
            <br></br>
            <p>Also read in</p>
            <Link href={`/articles/${articlesId}?lang=en`} className="underline cursor-pointer text-blue-600">English</Link><br></br>
            <Link href={`/articles/${articlesId}?lang=fr`} className="underline cursor-pointer text-blue-600">French</Link><br></br>
            <Link href={`/articles/${articlesId}?lang=jp`} className="underline cursor-pointer text-blue-600">Japanese</Link>
        </>
    )
}

export default newsArticle;