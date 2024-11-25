'use client'

import FullBanner from "@/components/atoms/FullBanner/FullBanner"
import TimeLineItem from "@/components/atoms/TimelineItem/TimeLineItem"
import useOrder from "@/hooks/use-order"
import { CreditCard, Gift, Printer, ReceiptText } from "lucide-react"
import { useTranslations } from "next-intl"

const TimelineBanner = () => {
  const t = useTranslations('components.molecules.TimelineBanner.items')
  const { step } = useOrder();

  return (
    <FullBanner className="px-7 sm:px-0">
      <div className="max-w-[700px] mx-auto flex justify-between relative">
        <div className="w-[calc(100%-50px)] mx-auto absolute top-[40px] left-[25px] border border-dashed border-main-500"></div>
        <TimeLineItem checked title={t('gift')} >
          <Gift className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('info')} checked={step >= 1}>
          <ReceiptText className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('payment')} checked={step >= 2}>
          <CreditCard className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('print')} checked={step >= 3}>
          <Printer className="w-12 h-auto" />
        </TimeLineItem>
      </div>
    </FullBanner>
  )
}

export default TimelineBanner