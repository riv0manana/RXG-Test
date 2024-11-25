import FullBanner from "@/components/atoms/FullBanner/FullBanner"
import TimeLineItem from "@/components/atoms/TimelineItem/TimeLineItem"
import { CreditCard, Gift, Printer, ReceiptText } from "lucide-react"
import { useTranslations } from "next-intl"

export type TimelineBannerProps = {

}

const TimelineBanner = () => {
  const t = useTranslations('components.molecules.TimelineBanner.items')
  return (
    <FullBanner className="mb-[50px]">
      <div className="max-w-[700px] mx-auto flex justify-between relative">
        <div className="w-[calc(100%-50px)] mx-auto absolute top-[40px] left-[25px] border border-dashed border-main-500"></div>
        <TimeLineItem checked title={t('gift')}>
          <Gift className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('info')}>
          <ReceiptText className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('payment')}>
          <CreditCard className="w-12 h-auto" />
        </TimeLineItem>
        <TimeLineItem title={t('print')}>
          <Printer className="w-12 h-auto" />
        </TimeLineItem>
      </div>
    </FullBanner>
  )
}

export default TimelineBanner