const DocPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;
    if (slug?.length == 2) {
        return (
            <h6>Docs page for {slug[0]} and {slug[1]}</h6>
        );
    } else if (slug?.length == 1) {
        return (
            <h6> Docs page for {slug[0]}</h6>
        );
    }
    return <h6> Docs page</h6>
}

export default DocPage