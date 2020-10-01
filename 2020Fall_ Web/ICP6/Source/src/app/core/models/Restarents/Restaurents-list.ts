import { ToastrIconClasses } from 'ngx-toastr'
export class LatsLong{
    label: string;
    lat: number;
    lng: number;
}
export class Location
    {
        address: string;
        crossStreet:string;
        lat: number;
        lng: number;
        labeledLatLngs : LatsLong[];
        distance: number;
        cc:string;
        city:string;
        state:string;
        country:string;
        formattedAddress: string[];
}
export class Icon{
    prefix: string;
    suffix: string;
}
export class Category{
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean
}
export class Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
    referralId: string;
    hasPerk: boolean
}
export class Response {
    venues : Venue[];
}
export class Meta {
    code: number;
    requestId: string;
}       
export class RestaurentList {
    meta = new Meta();
    response = new Response();
}