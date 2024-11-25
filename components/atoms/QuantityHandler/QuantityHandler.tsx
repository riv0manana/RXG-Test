import { Button } from "@/components/ui/button";

export type QuantityHandlerProps = {
  onAdd?: () => void;
  onReduce?: () => void;
  value?: number;
}

const QuantityHandler = ({
  onAdd,
  onReduce,
  value = 0
}: QuantityHandlerProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onReduce?.()}
        className="h-8 w-0 !border-none hover:text-main-600 text-main-600 hover:bg-white"
      >
        -
      </Button>
      <div className="rounded-[10px] w-[60px] h-10 grid place-items-center font-bold text-main-700 border border-custom-lightgray">
        {value}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onAdd?.()}
        className="h-8 w-0 !border-none hover:text-main-600 text-main-600 hover:bg-white "
      >
        +
      </Button>
    </div>
  )
}

export default QuantityHandler