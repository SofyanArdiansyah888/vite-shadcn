import {PrimaryNav} from "@/components/navigation/primary-nav.tsx";
import {UserNav} from "@/components/navigation/user-nav.tsx";
import {BranchSwitcher} from "@/components/navigation/branch-switcher.tsx";

export default function MainLayout({children}: { children: React.ReactNode }) {
    return <main>
        <div className="hidden min-h-screen flex-col md:flex">
            <nav className="bg-zinc-800 py-2">
                <div className="flex h-12 items-center px-4">
                    <PrimaryNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <BranchSwitcher isCollapsed={false}/>
                        <UserNav/>
                    </div>
                </div>
            </nav>
            {children}
        </div>
        <footer className={"w-full text-gray-200 py-2 px-4 bg-zinc-800 text-sm "}>
            @ 2023 Jamal . All Rights Reserved.
        </footer>
    </main>
}
