// Custom not found page - bad URL
// Filename should be not-found.tsx to be recoginized by next js
// This will be shown when the entered route wrong and this page can be called by programmatically
// One application can have many not-found pages based folder
const NotFound = () => {
    return (
        <>
            <div>
                <p>404 - Page Not Found</p>
                <span>Requested page not found</span>
            </div>
        </>
    )
}

export default NotFound