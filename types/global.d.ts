/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import fr from '@/messages/fr.json';
type Messages = typeof fr;
 
declare global {
  interface IntlMessages extends Messages {}
}