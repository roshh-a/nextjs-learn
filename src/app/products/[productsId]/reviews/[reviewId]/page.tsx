import NotFound from "./not-found";

export default async function ProductsReview({ params }: { params: Promise<{ productsId: string, reviewId: string }> }) {
    const { productsId, reviewId } = await params;
    const getRandomNum = (count: number) => {
        return Math.floor(Math.random() * count)
    }
    const randomNum = getRandomNum(2);
    if (randomNum === 1) {
        throw new Error("Error loading review 1");
    }
    if (reviewId > '1000') {
        return <>
            <NotFound />
        </>
    }
    return <>
        <h2 className="text-2xl font-bold">Details</h2>
        <div>Product of {productsId}&#39;s review {reviewId}</div>
        {/* Best way */}
        {/* <div>{`Product of ${productsId}'s review ${reviewId}`}</div> */}
    </>
}