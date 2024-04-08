import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import {Form, Input} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import StaffLayout from "@/components/layout/staff-layout.tsx";

export default function StaffForm() {
    const [form] = Form.useForm();

    return <StaffLayout>
        <section className={"py-4 px-12 space-y-4"}>
            <div className="flex items-center justify-between">
                <div className="space-y-1 my-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Tambah Staff
                    </h2>
                    {/*<p className="text-sm text-muted-foreground">*/}
                    {/*    Top picks for you. Updated daily.*/}
                    {/*</p>*/}
                </div>
                <div className={"flex justify-end gap-2"}>
                    <BackButton/>
                    <SaveButton/>
                </div>
            </div>
            <Separator className=""/>
            {/*<Card className={"border-t-2 !border-t-primary"}>*/}
            {/*<CardContent className={"py-4 space-y-8"}>*/}

            <Form
                form={form}
                layout={"vertical"}
            >
                <div className={"grid grid-cols-3 gap-x-4 gap-y-1"}>
                    <Form.Item label="Matakuliah">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                </div>
            </Form>
            {/*</CardContent>*/}
            {/*<CardFooter className={"flex justify-end"}>*/}
            {/*<Button size={"xs"} variant={"primary"}>Submit</Button>*/}
            {/*</CardFooter>*/}
            {/*</Card>*/}
        </section>
    </StaffLayout>
}
