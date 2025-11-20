"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function ProductDetails() {
    const route = useRouter();
    const productId = 100;
    const handleClick = () => {
        route.push('/');
    }
    return <>
        <div>
            <div className="flex">
                <button type="button" className="border w-auto h-auto p-2 cursor-pointer justify-end" onClick={handleClick}>CTA</button>
            </div>
            <Link href='/' className="underline cursor-pointer text-blue-600">Home</Link>
            <h2>Products</h2>
            <ul>
                <li><Link href='/products/1' className="underline cursor-pointer text-blue-600">Product 1</Link></li>
                <li><Link href='/products/2' className="underline cursor-pointer text-blue-600">Product 2</Link></li>
                <li><Link href='/products/3' className="underline cursor-pointer text-blue-600" replace>Product 3</Link></li>
                <li><Link href={`/products/${productId}`} className="underline cursor-pointer text-blue-600">Product {productId}</Link></li>
            </ul>
        </div >
    </>
}