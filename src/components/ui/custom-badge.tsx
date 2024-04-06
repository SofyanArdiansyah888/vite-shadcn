import {XCircleIcon} from "lucide-react";
import {Badge} from "antd";
import * as React from "react";

interface IBadgeProps {
    title?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function BadgeFilter({title, onClick}: IBadgeProps) {
    return <div onClick={onClick}><Badge
        size={"small"}
        className={"border-[1px] px-2 py-1 rounded-lg flex gap-1 text-center items-center text-xs"}
    >
        {title}
        <XCircleIcon className={"w-4 h-4 text-zinc-500 cursor-pointer"}/>
    </Badge></div>
}

export function BadgeDeleteFilter({onClick}: IBadgeProps) {
    return <div onClick={onClick}><Badge
        size={"small"}
        className={"border-[1px] border-primary text-primary cursor-pointer px-2 py-1 rounded-lg flex gap-1 text-center items-center text-xs"}>
        Hapus Filter
    </Badge></div>
}
