import MainLayout from "@/components/layout/main-layout.tsx";
import SecondaryNav from "@/components/navigation/secondary-nav.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Form, Input} from "antd";

export default function CreateStaff() {
    const [form] = Form.useForm();

    return <MainLayout>
        <SecondaryNav/>
        <section className={"py-4 px-12 space-y-4"}>
            <div className={"w-full flex justify-end gap-2"}>
                <Button size={"xs"} variant={"outline"}>Kembali</Button>
                <Button size={"xs"} variant={"primary"}>Simpan</Button>
            </div>
            {/*<Card className={"border-t-2 !border-t-primary"}>*/}
            {/*<CardContent className={"py-4 space-y-8"}>*/}
            <h3 className={"font-semibold"}>Buat Data Staff / Guru Baru</h3>
            <Form
                form={form}
                layout={"vertical"}
            >
                <div className={"grid grid-cols-3 gap-x-4 gap-y-0 gap-y-2"}>
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
                    <Form.Item label="Field A">
                        <Input/>
                    </Form.Item>
                </div>
            </Form>
            {/*</CardContent>*/}
            {/*<CardFooter className={"flex justify-end"}>*/}
            <Button size={"xs"} variant={"primary"}>Submit</Button>
            {/*</CardFooter>*/}
            {/*</Card>*/}
        </section>
    </MainLayout>
}
