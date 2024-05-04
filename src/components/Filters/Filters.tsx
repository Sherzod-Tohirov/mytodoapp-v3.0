import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FilterContext } from "../context/FilterContext";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export function Filters({ stylex = "" }: { stylex?: string }) {
  const filters = useContext(FilterContext);
  return (
    <AnimatePresence>
      <motion.div
        className={`flex items-center justify-center gap-5 flex-wrap ${stylex}`}
      >
        <Button
          className="font-medium"
          variant={filters?.alphaOrder ? "solid" : "flat"}
          color="warning"
          size="sm"
          endContent={<HiMiniArrowsUpDown />}
          onClick={() => filters?.setAlphaOrder((prev: boolean) => !prev)}
        >
          {filters?.alphaOrder ? "A-Z" : "Z-A"}
        </Button>
        <Button
          className="font-medium"
          variant={filters?.starredOrder ? "solid" : "flat"}
          color="secondary"
          size="sm"
          endContent={<HiMiniArrowsUpDown />}
          onClick={() => filters?.setStarredOrder((prev: boolean) => !prev)}
        >
          {filters?.starredOrder ? "Starred" : "Unstarred"}
        </Button>
        <Button
          className="font-medium"
          variant={filters?.doneOrder ? "solid" : "flat"}
          color="primary"
          size="sm"
          endContent={<HiMiniArrowsUpDown />}
          onClick={() => filters?.setDoneOrder((prev: boolean) => !prev)}
        >
          {filters?.doneOrder ? 'Done' : 'Undone'}
        </Button>
        <Button
          className="font-medium"
          variant={filters?.recentOrder ? "solid" : "flat"}
          color="danger"
          size="sm"
          endContent={<HiMiniArrowsUpDown className="icon" />}
          onClick={() => filters?.setRecentOrder((prev: boolean) => !prev)}
        >
          {filters?.recentOrder ? 'Recent todos' : 'Unrecent todos'}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
