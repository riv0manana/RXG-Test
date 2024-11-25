/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

declare type ActionStatusMsg =
    | 'success'

declare type StatusCode =
    | 200
    | 400
    | 404
    | 401
    | 500;

declare type ActionStatus = {
    message: ActionStatusMsg;
    statusCode: StatusCode;
    status: StatusCode;
}

declare type ActionResponse<T> = [error?: ActionStatus, data?: T];

declare type ArrayResponse<T> = {
    total: number;
    data: T[];
}

declare type PageProps = {
    params: {
        [x: string]: string;
    },
    searchParams: {
        [x: string]: string;
    }
}

/* DB Model */
declare type Coupon = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    price: number;
    pax: number;
    imgUrl: string;
}