'use client';
import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathName = usePathname();
    const productId = pathName.split('/')[2];
    const reviewId = pathName.split('/')[4];
    return (
        <>
            <div>
                <p>404 - Review Not Found</p>
                <span>Requested review of {reviewId} for {productId} not found</span>
            </div>
        </>
    )
}

export default NotFound