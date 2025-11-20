import { Metadata } from "next";
import Counter from "./counter";

export const metadata: Metadata = {
    title: {
        absolute: 'Counter' // This will render as "About Us", ignoring the parent template
    }
}

const counterPage = () => {
    return (
        <Counter />
    )
}

export default counterPage;