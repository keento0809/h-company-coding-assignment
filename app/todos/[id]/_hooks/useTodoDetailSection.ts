import { usePathname } from "next/navigation";

export const useTodoDetailSection = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[pathname.split("/").length - 1];

  return {
    path,
  };
};
