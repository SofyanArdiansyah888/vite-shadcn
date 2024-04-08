import React from 'react';
import CustomHeader from "@/components/shared/custom-header.tsx";
import AkademikLayout from "@/components/layout/akademik-layout.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {BackButton, Button, SaveButton} from "@/components/ui/button.tsx";
import {Link} from "@tanstack/react-router";


const JadwalPelajaranDetailPage: React.FC = () => {
    const days = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    return (<AkademikLayout>
            <section className={"px-12 py-4"}>
                <CustomHeader
                    title={"Jadwal Pelajaran"}
                    additionalAction={<>
                        <Link to={"/akademik/jadwal-pelajaran"}>
                            <BackButton/>
                        </Link>
                        <SaveButton/>
                    </>}
                />
                <div className={"space-y-3 my-4 font-medium"}>
                    <JadwalPelajaranLabel label={"Sekolah"} value={"SD MANGKURA IV"}/>
                    <JadwalPelajaranLabel label={"Tahun Ajaran"} value={"2023/2024"}/>
                    <JadwalPelajaranLabel label={"Kelas"} value={"XI-1"}/>
                </div>

                <Tabs defaultValue="senin" className="">
                    <TabsList className="justify-start w-full gap-4 font-light ">
                        {
                            days.map((day, index) =>
                                <TabsTrigger
                                    key={index}
                                    value={day}
                                    className={"capitalize"}>{day}
                                </TabsTrigger>)
                        }

                    </TabsList>
                    {
                        days.map((day, index) =>
                            <TabsContent value={day} key={index}>
                                <Card>
                                    <CardContent className="space-y-2">

                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>)
                    }


                </Tabs>


            </section>

        </AkademikLayout>

    );
};

function JadwalPelajaranLabel({label, value}: { label: string, value: string }) {
    return <div className={"flex gap-2"}>
        <div className={"flex justify-between min-w-[200px]"}>
            {label}
            <span>:</span>
        </div>
        {value}
    </div>
}

export default JadwalPelajaranDetailPage;
