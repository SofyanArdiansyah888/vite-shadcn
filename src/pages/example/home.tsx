import {Separator} from "@/components/ui/separator.tsx";
import {Sidebar} from "@/pages/example/components/sidebar.tsx";
import {playlists} from "@/pages/example/data/playlists.ts";
import Tableku from "@/pages/example/components/tableku.tsx";
import {Button, Input} from "antd";
import {FilterIcon} from "lucide-react";


export default function HomePage() {
    const {Search} = Input
    return <>
        <div className="md:hidden">
            {/*<Image*/}
            {/*    src="/examples/music-light.png"*/}
            {/*    width={1280}*/}
            {/*    height={1114}*/}
            {/*    alt="Music"*/}
            {/*    className="block dark:hidden"*/}
            {/*/>*/}
            {/*<Image*/}
            {/*    src="/examples/music-dark.png"*/}
            {/*    width={1280}*/}
            {/*    height={1114}*/}
            {/*    alt="Music"*/}
            {/*    className="hidden dark:block"*/}
            {/*/>*/}
        </div>
        <div className="hidden md:block">
            {/*<Menu />*/}
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-6">
                        <Sidebar playlists={playlists} className="hidden lg:block"/>
                        <div className="col-span-3 lg:col-span-5 lg:border-l">
                            <div className="h-full px-4 py-6 lg:px-8">
                                <div className="space-between flex items-center">
                                    {/*<TabsList>*/}
                                    {/*    <TabsTrigger value="music" className="relative">*/}
                                    {/*        Music*/}
                                    {/*    </TabsTrigger>*/}
                                    {/*    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>*/}
                                    {/*    <TabsTrigger value="live" disabled>*/}
                                    {/*        Live*/}
                                    {/*    </TabsTrigger>*/}
                                    {/*</TabsList>*/}
                                    {/*<div className="ml-auto mr-4">*/}
                                    {/*    <Button size={"sm"}>*/}
                                    {/*        <PlusCircledIcon className="mr-2 h-4 w-4" />*/}
                                    {/*        Add music*/}
                                    {/*    </Button>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1 my-2">
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                            List Karyawan
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Top picks for you. Updated daily.
                                        </p>
                                    </div>
                                    <div className={"flex gap-1"}>
                                        <Search placeholder="Search Music" onSearch={() => {
                                        }} enterButton/>
                                        <Button
                                            size={"middle"}
                                            className={"flex gap-2 !bg-zinc-800 hover:!bg-zinc-500 border-0"}
                                        >
                                            Filter
                                            <FilterIcon className={"w-4 h-4 mt-1"} strokeWidth={1}/>
                                        </Button>
                                    </div>
                                </div>


                                <Separator className=""/>


                                <Tableku/>


                                {/*<Separator className="my-4" />*/}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
