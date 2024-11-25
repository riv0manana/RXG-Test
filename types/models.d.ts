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