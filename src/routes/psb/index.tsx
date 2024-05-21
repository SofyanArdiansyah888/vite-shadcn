import PSBPage from "@/pages/psb/psb-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/psb/")({
  component: () => <PSBPage />,
});
