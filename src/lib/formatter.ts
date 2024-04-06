import moment from "moment/moment";

export function tanggalID(value: string){
    return moment(value).format("DD MMMM YYYY")
}
