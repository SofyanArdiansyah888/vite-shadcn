import {UserAuthForm} from "@/pages/(auth)/_components/user-auth-form.tsx";
import {createFileRoute} from "@tanstack/react-router";


export const Route = createFileRoute('/(auth)/login')({
    component: () => <LoginPage />
})

export default function LoginPage() {
    return (
        <>
            <div className="md:hidden">
                {/*<Image*/}
                {/*    src="/examples/authentication-light.png"*/}
                {/*    width={1280}*/}
                {/*    height={843}*/}
                {/*    alt="Authentication"*/}
                {/*    className="block dark:hidden"*/}
                {/*/>*/}
                {/*<Image*/}
                {/*    src="/examples/authentication-dark.png"*/}
                {/*    width={1280}*/}
                {/*    height={843}*/}
                {/*    alt="Authentication"*/}
                {/*    className="hidden dark:block"*/}
                {/*/>*/}
            </div>
            <div
                className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0  ">
                        <img className={"min-h-screen"}
                             src={"https://scontent-cgk1-1.cdninstagram.com/v/t39.30808-6/433036346_17859732585107868_4472604024052915105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=1NVbdPaIUCAAb64b_lZ&_nc_ht=scontent-cgk1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD1uhDiGEztGzKrpIT86sdtIqAvuUWGG_o50v8GJnq--A&oe=662A5DA0"}
                             alt={"Ponpes"}/>
                    </div>
                    <div className="absolute inset-0 bg-opacity-50 bg-zinc-800 backdrop-filter "></div>
                    <div className="relative z-20 flex gap-4 items-center text-xl font-medium">
                        <img
                            src={"https://ahlusshidqiwarrahmah.ponpes.id/wp-content/uploads/2024/02/cropped-logo-ponpes-asr.png"}
                            alt={"Logo"} className={"w-16 h-16"}/>
                        Pesantren Ahlus Shidqi War Rahmah
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;For him who follows a path for seeking knowledge, Allah will ease for him the
                                path to paradise.&rdquo;
                            </p>
                            <footer className="text-sm">(Muslim)</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Login
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Masukkan nama user atau email dan password anda.
                            </p>
                        </div>
                        <UserAuthForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
