import PSBDetailPage from "@/pages/psb/psb-detail-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/psb/$id")({
  component: () => <PSBDetailPage />,
});
