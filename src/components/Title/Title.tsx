import { ReactNode } from "react";
export function Title({
  children,
  stylex = "",
}: {
  children: ReactNode;
  stylex?: string;
}) {
  return (
    <h1 className={`text-center text-5xl font-thin ${stylex}`}>
      {children}<span className="text-7xl text-orange-500">.</span>
    </h1>
  );
}
