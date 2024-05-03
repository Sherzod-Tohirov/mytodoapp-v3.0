import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FilterContext } from "../context/FilterContext";
export function Filters() {
  const filters = useContext(FilterContext);
  console.log(filters);
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      <Button
        className="font-medium"
        variant="flat"
        color="warning"
        size="sm"
        endContent={<HiMiniArrowsUpDown />}
        onClick={() => filters?.setAlphaOrder((prev: boolean) => !prev)}
      >
        A-Z
      </Button>
      <Button
        className="font-medium"
        variant="flat"
        color="secondary"
        size="sm"
        endContent={<HiMiniArrowsUpDown />}
      >
        Unstarred
      </Button>
      <Button
        className="font-medium"
        variant="flat"
        color="primary"
        size="sm"
        endContent={<HiMiniArrowsUpDown />}
      >
        Undone
      </Button>
      <Button
        className="font-medium"
        variant="flat"
        color="danger"
        size="sm"
        endContent={<HiMiniArrowsUpDown className="icon" />}
      >
        Recent todos
      </Button>
    </div>
  );
}
