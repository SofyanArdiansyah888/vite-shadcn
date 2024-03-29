'use client'
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {cva} from "class-variance-authority";
import {ScrollArea} from "@/components/ui/scroll-area";

type ModalFormT = {
    title: string,
    description: string,
    buttonText: string,
    FormComponent: React.ReactNode
    modalSize?: "sm" | "lg" | "xl" | "3xl" | "5xl" | "full"
}

const modalVariants = cva("", {
    variants: {
        size: {
            sm: "",
            lg: "w-lg !max-w-lg",
            xl: "w-xl !max-w-xl",
            '3xl': "w-3xl !max-w-3xl",
            '5xl': "w-3xl !max-w-5xl",
            full: "w-full !max-w-full"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})
export default function ModalForm({
                                      title,
                                      description,
                                      modalSize = "sm",
                                      buttonText = "Tambah",
                                      FormComponent
                                  }: ModalFormT) {

    return <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" size={"sm"}>{buttonText}</Button>
        </SheetTrigger>
        <SheetContent className={modalVariants({size: modalSize})}>
            <SheetHeader>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>
                    {description}
                </SheetDescription>
            </SheetHeader>
            <ScrollArea className={"h-screen pb-32"}>
                {FormComponent}
            </ScrollArea>
        </SheetContent>
    </Sheet>
}
