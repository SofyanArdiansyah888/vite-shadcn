import { IDetailInfoModal } from "@/components/shared/modal/detail-modal.tsx";
import { useGetList } from "@/hooks/useApi.tsx";
import { IUseParams } from "@/hooks/useParams.tsx";
import { usersPsb } from "@/lib/faker";
import { Link } from "@tanstack/react-router";
import { Checkbox, Table, TableProps } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Dispatch } from "react";
import PsbEntity from "@/pages/psb/_data/psb.entity";

export default function PsbTable({
  params,
}: {
  params: IUseParams;
  handleGroupModal: (key: string, value: boolean) => void;
  setDetail: Dispatch<IDetailInfoModal[]>;
}) {
  const { data, isLoading } = useGetList<PsbEntity[]>({
    endpoint: "/psb",
    name: "psb",
    params,
  });

  const onChange = (e: CheckboxChangeEvent, id: string) => {
    console.log(`checked = ${e.target.checked} id:${id}`);
  };

  const columns: TableProps<PsbEntity>["columns"] = [
    {
      title: "Nomor Pendaftaran",
      dataIndex: "nomor_pendaftaran",
      width: "180px",
      fixed: "left",
    },
    {
      title: "Nama",
      dataIndex: "nama",
      width: "280px",
      sorter: true,
      render(value, record) {
        return (
          <Link to={`/psb/${record.id}`} params>
            {value}
          </Link>
        );
      },
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
      width: "150px",
    },
    {
      title: "Agama",
      dataIndex: "agama",
      width: "80px",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      width: "250px",
    },
    {
      title: "Asal Sekolah",
      dataIndex: "asal_sekolah",
      width: "250px",
    },
    {
      title: "Provinsi",
      dataIndex: "provinsi",
      width: "250px",
    },
    {
      title: "Kabupaten",
      dataIndex: "kabupaten",
      width: "250px",
    },

    {
      title: "Nomor Telepon",
      dataIndex: "nomor_telepon",
      width: "150px",
    },
    {
      title: "Action",
      dataIndex: "id",
      width: "150px",
      fixed: "right",
      render: (_, data) => (
        <div className={"flex gap-1"}>
          <Checkbox onChange={(e) => onChange(e, data.id)}>Verified</Checkbox>
        </div>
      ),
    },
  ];

  return (
    <Table
      dataSource={data?.length ? data : usersPsb}
      columns={columns}
      rowClassName="editable-row"
      pagination={{
        onChange: () => {},
      }}
      size={"small"}
      scroll={{ x: "calc(700px + 50%)" }}
      loading={isLoading}
    />
  );
}
