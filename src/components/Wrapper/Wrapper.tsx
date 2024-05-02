import { WrapperBox } from "../../utils/types";

export function Wrapper({
  children,
  dir = "col",
  justify = "start",
  align = "start",
  wrap = "nowrap",
  padding = "0",
  stylex = ''
}: WrapperBox) {
  return (
    <div
      className={`w-full flex flex-${dir} justify-content-${justify} items-${align} flex-${wrap} p-[${padding}] ${stylex}`}
    >
      {children}
    </div>
  );
}
