import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BackButton, SaveButton} from "@/components/ui/button.tsx";
import AbsensiLayout from "@/components/layout/absensi-layout.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FormInput from "@/components/shared/form/form-input.tsx";
import {Form, FormInstance} from "antd";
import {createFileRoute, useParams} from "@tanstack/react-router";
import {useGetDetail} from "@/hooks/useApi.tsx";
import StaffEntity from "@/pages/staff/_data/staff.entity.ts";
// import {render} from "react-dom";
import 'leaflet/dist/leaflet.css';
import {Circle, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'


export const Route = createFileRoute('/absensi/pengaturan/')({
    component: () => <Index/>
})

const Index: React.FC = () => {
    const [form] = Form.useForm();
    const {id} = useParams({from: "/staff/$id"})
    const {data: staff} = useGetDetail<StaffEntity>({
        name: 'staff',
        endpoint: `/staff`,
        id
    })
    useEffect(() => {
        if (staff) {
            form.setFieldsValue({
                ...staff,
            })
        }
    }, [form, staff]);
    return (<AbsensiLayout>
            <section className={"px-12 py-4"}>
                <Form
                    form={form}
                    layout={"vertical"}
                    className={""}
                    initialValues={{
                        radius: 50,
                        latitude: 0,
                        longitude: 0
                    }}
                >
                    <div className="flex items-center justify-between ">
                        <div className="space-y-1 my-2">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Pengaturan Absensi
                            </h2>
                        </div>
                        <div className={"flex justify-end gap-2"}>
                            <BackButton/>
                            <SaveButton/>
                        </div>
                    </div>
                    <Separator className="my-2"/>
                    <div className={"grid grid-cols-3 gap-x-4 gap-y-1 my-6"}>
                        <div className={"space-y-4"}>
                            <div>
                                <h3 className={"font-medium text-lg"}>Kordinat</h3>
                                <Separator className={"my-3"}/>
                            </div>

                            <FormInput
                                name={"radius"}
                                label={"radius"}
                            />
                            <div className={"grid grid-cols-2 gap-2"}>
                                <FormInput name={"latitude"} label={"latitude"}/>
                                <FormInput name={"longitude"} label={"longitude"}/>
                            </div>
                        </div>
                        <div className={"col-span-2 py-12"}>
                            <Map form={form}/>
                        </div>


                    </div>
                </Form>
            </section>

        </AbsensiLayout>

    );
};


export function Map({form}: { form: FormInstance }) {
    const center = {
        lat: -5.1119074,
        lng: 119.410953,
    }
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef<any>(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                console.log(marker.getLatLng())
                if (marker != null) {
                    form.setFieldsValue({
                        latitude: marker.getLatLng().lat,
                        longitude: marker.getLatLng().lat,
                    })
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <MapContainer center={center} zoom={5} scrollWheelZoom={false} className={"w-full h-[400px] py-12 rounded-lg"}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={center} pathOptions={{fillColor: "blue"}} radius={form.getFieldValue('radius')}/>
            <Marker
                draggable={true}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
                    <span onClick={toggleDraggable}>
                      {draggable
                          ? 'Marker is draggable'
                          : 'Click here to make marker draggable'}
                    </span>
                </Popup>
            </Marker>
        </MapContainer>
    );
};
export default Index;
