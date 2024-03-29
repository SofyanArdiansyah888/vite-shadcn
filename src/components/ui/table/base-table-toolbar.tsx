"use client"

import {Cross2Icon} from "@radix-ui/react-icons"
import {Table} from "@tanstack/react-table"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BaseTableViewOptions} from "@/components/ui/table/base-table-view-options";
import React from "react";


interface DataTableToolbarProps<TData> {
    table: Table<TData>,
    FilterComponent?: React.ReactNode,
    ActionComponent?: React.ReactNode
}

export default function BaseTableToolbar<TData>({
                                            table,
                                            FilterComponent,
                                            ActionComponent
                                        }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {FilterComponent}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4"/>
                    </Button>
                )}
            </div>
            <div className={"flex gap-2 items-end"}>
                <BaseTableViewOptions table={table}/>
                { ActionComponent }
            </div>

        </div>
    )
}
