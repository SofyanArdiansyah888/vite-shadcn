import moment from "moment/moment";

export function tanggalID(value: string){
    return moment(value).format("DD MMMM YYYY")
}

export function tanggalJamID(value: string){
    return moment(value).format("DD MMMM YYYY hh:mm:ss")
}
