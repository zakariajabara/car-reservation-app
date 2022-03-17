export interface Reservation {
    id: number;
    customer_id:number;
    car_id: number;
    from:Date;
    to:Date;
    
    arrival_city:string;
    return_city: string;
    status: string;
}