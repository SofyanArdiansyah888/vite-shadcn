import {Form, GetProp, Image, Upload, UploadFile, UploadProps} from "antd";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {SaveButton} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
import moment from "moment/moment";
import {PlusCircledIcon} from "@radix-ui/react-icons";

interface IStaffForm {
    title: string
    staff?: StaffEntity
}



export default function ProfilForm({title,staff}:IStaffForm) {
    const [form] = Form.useForm();
    console.log(staff,'staff form')
    useEffect(() => {
        if(staff){
            form.setFieldsValue({
                ...staff,
                tanggal_lahir: moment(staff.tanggal_lahir)
            })
        }
    }, [form, staff]);

    return <Form
        form={form}
        layout={"vertical"}
        className={""}
    >
        <div className="flex items-center justify-between ">
            <div className="space-y-1 my-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h2>
            </div>
            <div className={"flex justify-end gap-2"}>
                <SaveButton/>
            </div>
        </div>
        <Separator className="my-2"/>
        <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
            <div className={"space-y-3"}>
                <FormInput
                    name={"name"}
                    label={"Nama Pengguna"}
                    rules={[{required: true}]}
                />
                <FormInput
                    name={"username"}
                    label={"Username"}
                    rules={[{required: true}]}
                />
                <FormInput
                    name={"email"}
                    label={"Email"}
                    rules={[{required: true}]}
                />
                <FormInput
                    name={"password"}
                    label={"Password"}
                    type={"password"}
                    help={"Kosongkan jika tidak ingin ubah password"}
                />

                <FormInput
                    name={"password"}
                    label={"Ulangi Password"}
                    type={"password"}

                />

                <UploadField />

            </div>


        </div>
    </Form>
}


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const UploadField: React.FC = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
    ]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} className={"text-center"} type="button">
            <PlusCircledIcon className={"mx-auto"} />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    return (
        <>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};

