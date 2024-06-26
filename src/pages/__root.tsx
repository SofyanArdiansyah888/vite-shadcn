import {createRootRouteWithContext, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Outlet/>
            <ReactQueryDevtools buttonPosition="bottom-right"/>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    );
}
