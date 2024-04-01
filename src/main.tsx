// /src/main.tsx

import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/globals.css"
import {ConfigProvider} from "antd";

const queryClient = new QueryClient();
const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={{
                token:{
                    colorPrimary: "#EA580C",
                    borderRadius: 8,
                }
            }}>
            <RouterProvider router={router} />
            </ConfigProvider>
        </QueryClientProvider>
    );
}
