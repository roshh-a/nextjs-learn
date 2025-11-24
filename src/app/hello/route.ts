// #region Route Handler

// The https GET method is used here, so whenever the route /hello with Get method is called, this content will be give 
export const GET = async () => {
    return new Response("Hello world!");
}

// #endregion 

