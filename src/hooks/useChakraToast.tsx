import { useToast } from "@chakra-ui/react";

export function useChakraToast() {
  const toast = useToast();
  return { toast };
}
