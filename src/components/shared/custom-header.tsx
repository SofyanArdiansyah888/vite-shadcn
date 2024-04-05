import {Separator} from "@/components/ui/separator.tsx";
import React from "react";
import {Input} from "antd";


interface ICustomHeader {
    title: string,
    subtitle?: string
    searchPlaceholder?: string,
    handleSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>, info?: {
        source?: 'clear' | 'input';
    }) => void,
    additionalAction?: React.ReactNode
}

export default function CustomHeader({
                                         title,
                                         subtitle,
                                         handleSearch,
                                         searchPlaceholder = "Cari..",
                                         additionalAction
                                     }: ICustomHeader) {
    const {Search} = Input
    return <>
        <div className="flex items-center justify-between">
            <div className="space-y-1 my-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h2>
                {subtitle && <p className="text-sm text-muted-foreground">
                    {subtitle}
                </p>}
            </div>
            <div className={"flex gap-1"}>
                {
                    handleSearch && <Search placeholder={searchPlaceholder} onSearch={handleSearch} enterButton/>
                }
                {additionalAction}
            </div>
        </div>

        <Separator/>
    </>
}
