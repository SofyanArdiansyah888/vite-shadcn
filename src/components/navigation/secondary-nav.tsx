import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Link} from "@tanstack/react-router";
import {ReactNode} from "react";

interface ISubmenu {
    link: string
    button: ReactNode
}

export interface IMenu {
    link: string
    button: ReactNode
    submenu?: ISubmenu[]
}

export interface ISecondaryNav {
    menus: IMenu[]
}

export default function SecondaryNav({menus}: ISecondaryNav) {
    return <nav className="border-b bg-zinc-100 py-0 ">
        <div className="flex h-12 items-center px-6">
            <NavigationMenu>
                <NavigationMenuList className={"space-x-0"}>
                    {
                        menus?.map((item, key) => {
                            if (!item?.submenu) {
                                return <NavigationMenuItem key={key}>
                                    <Link to={item.link}>
                                        <NavigationMenuTrigger
                                            className={"bg-transparent gap-2 hover:text-primary font-medium"}>
                                            {item.button}
                                        </NavigationMenuTrigger>
                                    </Link>
                                </NavigationMenuItem>
                            }

                            return <NavigationMenuItem className={"group/item "}>
                                <NavigationMenuTrigger
                                    className={"bg-transparent gap-2 hover:text-primary font-medium"}>
                                    {item.button}
                                </NavigationMenuTrigger>
                                <div className={"absolute p-2 text-sm shadow-md hidden group-hover/item:block bg-white"}>
                                    <ul className={"z-20"}>
                                        {item?.submenu?.map((subItem, subKey) => <li
                                            key={subKey}><Link to={subItem.link}>{subItem.button}</Link></li>)}
                                    </ul>
                                </div>
                                {/*<NavigationMenuContent>*/}
                                {/*    <ul>*/}
                                {/*        {item?.submenu?.map((subItem, subKey) => <li*/}
                                {/*            key={subKey}><Link to={subItem.link}>{subItem.button}</Link></li>)}*/}
                                {/*    </ul>*/}
                                {/*</NavigationMenuContent>*/}
                            </NavigationMenuItem>
                        })
                    }
                    {/*<NavigationMenuItem>*/}
                    {/*    <NavigationMenuTrigger className={"bg-transparent gap-2 hover:text-primary font-medium"}>*/}
                    {/*        <CircleGaugeIcon className={"w-4 h-4"} strokeWidth={1}/>*/}
                    {/*        Dashboard*/}
                    {/*    </NavigationMenuTrigger>*/}
                    {/*    <NavigationMenuContent>*/}
                    {/*        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">*/}
                    {/*            <li className="row-span-3">*/}
                    {/*                <NavigationMenuLink asChild>*/}
                    {/*                    <a*/}
                    {/*                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"*/}
                    {/*                        href="/"*/}
                    {/*                    >*/}
                    {/*                        /!*<Icons.logo className="h-6 w-6" />*!/*/}
                    {/*                        <div className="mb-2 mt-4 text-lg font-medium">*/}
                    {/*                            shadcn/ui*/}
                    {/*                        </div>*/}
                    {/*                        <p className="text-sm leading-tight text-muted-foreground">*/}
                    {/*                            Beautifully designed components built with Radix UI and*/}
                    {/*                            Tailwind CSS.*/}
                    {/*                        </p>*/}
                    {/*                    </a>*/}
                    {/*                </NavigationMenuLink>*/}
                    {/*            </li>*/}
                    {/*            /!*<ListItem href="/docs" title="Introduction">*!/*/}
                    {/*            /!*    Re-usable components built using Radix UI and Tailwind CSS.*!/*/}
                    {/*            /!*</ListItem>*!/*/}
                    {/*            /!*<ListItem href="/docs/installation" title="Installation">*!/*/}
                    {/*            /!*    How to install dependencies and structure your app.*!/*/}
                    {/*            /!*</ListItem>*!/*/}
                    {/*            /!*<ListItem href="/docs/primitives/typography" title="Typography">*!/*/}
                    {/*            /!*    Styles for headings, paragraphs, lists...etc*!/*/}
                    {/*            /!*</ListItem>*!/*/}
                    {/*        </ul>*/}
                    {/*    </NavigationMenuContent>*/}
                    {/*</NavigationMenuItem>*/}

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </nav>
}
