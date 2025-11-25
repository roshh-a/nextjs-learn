import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtected = createRouteMatcher(['/user-profile']);
const isPublicroute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();
    if (!userId && !isPublicroute) {
        // custom logic for authenticated routes
    }
    if (!isPublicroute(req)) {
        await auth.protect(); // will be redirected to signin page
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};