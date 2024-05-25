import PsbLayout from "@/components/layout/psb-layout";
import {createFileRoute, useParams} from "@tanstack/react-router";
import React from "react";
import Index from "@/pages/penggajian/(penggajian)";

export const Route = createFileRoute('/psb/psb-detail')({
    component: () => <Index />,
})
const PsbDetail: React.FC = () => {
  const { id } = useParams({ from: "/psb/$id" });
  return (
    <PsbLayout>
      <section className={"px-12 py-4"}>
        <>{`id:${id}`}</>
      </section>
    </PsbLayout>
  );
};

export default PsbDetail;
