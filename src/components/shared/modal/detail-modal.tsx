import React from "react";
import {Button, Modal} from "antd";
import {Separator} from "@/components/ui/separator.tsx";


interface IDetailModal {
    title: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    details: { key: string, value: string }[]
}

export default function DetailModal({
                                           title,
                                           isOpen,
                                           setIsOpen,
                                           details
                                       }: IDetailModal) {

    return <Modal
        title={title}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        destroyOnClose
        className={""}
        footer={[  <Button key="back" onClick={() => setIsOpen(false)}>
            Tutup
        </Button>]}
    >
        <Separator className={"mb-8"} />
        <section className={"grid grid-cols-2 gap-x-6 gap-y-4"}>
            {
                details.map((item, index) => {
                    return <div key={index}>
                        <h6 className={"font-medium"}>{item.key}</h6>
                        <p className={"font-light"}>{item.value}</p>
                    </div>
                })
            }
        </section>
        <Separator className={"mt-8"} />
    </Modal>
}
