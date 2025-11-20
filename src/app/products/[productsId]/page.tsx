import { Metadata } from "next";
import Link from "next/link";

interface Params {
    params: Promise<{ productsId: string }>
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
    const id = (await params).productsId;
    return {
        title: `Product - ${id}`
    }
}

export default async function ProductDetails({ params }: Params) {
    const productId = (await params).productsId;
    return <>
        <Link href='/products' className="underline cursor-pointer text-blue-600">Products</Link>{""}
        <Link href='/' className="underline cursor-pointer text-blue-600">Home</Link>
        <h2 className="text-2xl font-bold">Product details of {productId}</h2>
    </>
}