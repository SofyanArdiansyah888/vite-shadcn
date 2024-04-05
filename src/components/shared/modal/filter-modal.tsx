import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {FilterButton} from "@/components/ui/button.tsx";
import React from "react";


interface IFilterModal {
    title: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
    handleFilterClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function FilterModal({title, isOpen, setIsOpen, children, handleFilterClick}: IFilterModal) {

    return <AlertDialog
        onOpenChange={setIsOpen}
        open={isOpen}
    >
        <AlertDialogTrigger asChild>
            <FilterButton/>
        </AlertDialogTrigger>
        <AlertDialogContent className={"w-[400px]"}>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
            </AlertDialogHeader>
            {children}
            <AlertDialogFooter>
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>
                <FilterButton onClick={handleFilterClick}/>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}
