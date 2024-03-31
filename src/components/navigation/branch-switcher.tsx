"use client"

import * as React from "react"

import {cn} from "@/lib/utils.ts"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

export const accounts = [
    {
        label: "Branch I",
        email: "Jl. Cepa No.123",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Vercel</title>
                <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor"/>
            </svg>
        ),
    },
    {
        label: "Branch II",
        email: "Jl. Cendrawasi No.123",
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Vercel</title>
                <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor"/>
            </svg>
        ),
    },
]

interface BranchSwitcherProps {
    isCollapsed: boolean
}

export function BranchSwitcher({
                                   isCollapsed = false,
                               }: BranchSwitcherProps) {
    const [selectedAccount, setSelectedAccount] = React.useState<string>(
        accounts[0].email
    )

    return (
        <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
            <SelectTrigger
                className={cn(
                    "bg-transparent text-white border-0 flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                    isCollapsed &&
                    "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
                )}
                aria-label="Select account"
            >
                <SelectValue placeholder="Select an account">
                    {accounts.find((account) => account.email === selectedAccount)?.icon}
                    <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
                accounts.find((account) => account.email === selectedAccount)
                    ?.label
            }
          </span>
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {accounts.map((account) => (
                    <SelectItem key={account.email} value={account.email}>
                        <div
                            className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                            {account.icon}
                            {account.email}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
