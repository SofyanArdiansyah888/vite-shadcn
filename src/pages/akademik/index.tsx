import React from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import {createFileRoute} from "@tanstack/react-router";


export const Route = createFileRoute('/akademik/')({
    component: () => <Index />
})

const Index: React.FC = () => {

    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Akademik"}
                />

            </section>
        </AkademikLayout>

    );
};

export default Index;
