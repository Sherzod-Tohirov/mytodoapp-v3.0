import { createContext, ReactNode, useState } from "react";
import { FilterContextType } from "../../utils/types";

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [alphaOrder, setAlphaOrder] = useState(false);
  const [starredOrder, setStarredOrder] = useState(false);
  const [doneOrder, setDoneOrder] = useState(false);
  const [recentOrder, setRecentOrder] = useState(false);
  return (
    <FilterContext.Provider
      value={{
        alphaOrder,
        setAlphaOrder,
        starredOrder,
        setStarredOrder,
        doneOrder,
        setDoneOrder,
        recentOrder,
        setRecentOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
