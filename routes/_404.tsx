export default function Error404() {
    return (
        <>
            <head>
                <title>404 - Page not found</title>
            </head>
            <div class="px-4 py-8 mx-auto bg-[#86efac]">
                <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-bold">404 - Page not found</h1>
                    <p class="my-4">
                        The page you were looking for doesn't exist.
                    </p>
                </div>
            </div>
        </>
    );
}
