import {activeCheck} from "@/lib/utils.ts";
import {ReactNode} from "react";

export default function ButtonNavigation({
                                             children,
                                             title,
                                             link,
                                             router,
                                         }: {
    children: ReactNode,
    title: string,
    link: string,
    router: any
}) {
    return <div className={`gap-2 flex items-center ${activeCheck(link, router)}`}>
        {children}
        {title}
    </div>
}

export  function ButtonSubNavigation({
                                             children,
                                             title,
                                             link,
                                             router,
                                         }: {
    children: ReactNode,
    title: string,
    link: string,
    router: any
}) {
    return <div className={`gap-2 px-3 py-2 font-medium text-xs min-w-[180px] hover:text-primary cursor-pointer max-w-fit flex items-center ${activeCheck(link, router)}`}>
        {children}
        {title}
    </div>
}
