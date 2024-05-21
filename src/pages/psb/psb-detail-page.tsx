import PsbLayout from "@/components/layout/psb-layout";
import { useParams } from "@tanstack/react-router";

const PSBDetailPage: React.FC = () => {
  const { id } = useParams({ from: "/psb/$id" });
  return (
    <PsbLayout>
      <section className={"px-12 py-4"}>
        <>{`id:${id}`}</>
      </section>
    </PsbLayout>
  );
};

export default PSBDetailPage;
