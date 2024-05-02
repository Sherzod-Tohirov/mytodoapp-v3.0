import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
export function Title({
  children,
  stylex = "",
}: {
  children: ReactNode;
  stylex?: string;
}) {
  return (
    <Text fontSize="5xl" className={`text-center font-thin ${stylex}`}>
      {children}<span className="text-7xl text-orange-500">.</span>
    </Text>
  );
}
