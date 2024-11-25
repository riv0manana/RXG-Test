/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { FetchCoupons, FetchCouponSlug } from "@/services/actions/coupon.action";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { slug }
}: PageProps) {


  const [, coupon] = await FetchCouponSlug(slug);

  if (!coupon) redirect('/');

  const app = await getTranslations('Common.app');
  const t = await getTranslations('Public.CouponPage');

  const title = t('pageTitle', { appName: app('name'), couponName: coupon.title });
  const description = t('pageDescription', { description: coupon.longDescription || coupon.description });

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: app('url'),
      title,
      description,
      siteName: app('name'),
      images: [{
        url: `${app('url')}/og.png`,
      }],
    },
    authors: {
      name: "riv0manana | Rivomanana MANDANIAINA",
      url: "https://riv0manana.dev",
    },
    keywords: t('keywords').split(', '),
  } as Metadata
}

export default async function CouponPage({
  params: { slug }
}: PageProps) {

  const [, coupon] = await FetchCouponSlug(slug);
  if (!coupon) redirect('/');

  return (
    <>
    {coupon.title}
    </>

  );
}

export async function generateStaticParams() {
  const [, res] = await FetchCoupons(0, 50);

  if (!res) {
    return [];
  }

  return res.data.map(item => ({
    slug: item.title.replaceAll(' ', '_').toLowerCase(),
  }))
}