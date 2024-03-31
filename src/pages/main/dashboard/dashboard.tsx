import MainLayout from "@/components/layout/main-layout.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {SchoolIcon} from "lucide-react";

export default function DashboardPage(){
        return <MainLayout>
            <section className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"}>
                <Card className={"bg-green-300 hover:bg-green-400 cursor-pointer"}>
                    <CardContent className={"flex py-4 gap-4 items-center"}>
                        <SchoolIcon strokeWidth={0.4} className={"h-20 w-20"} />
                        <div className={"space-y-1"}>
                            <h2 className={"text-lg"}>Data Guru & Staff</h2>
                            <p className={"text-xs"}>Kelola data guru dan staff di sekolah anda</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
                <Card>
                    <CardHeader>Hello</CardHeader>
                </Card>
            </section>
        </MainLayout>
}
