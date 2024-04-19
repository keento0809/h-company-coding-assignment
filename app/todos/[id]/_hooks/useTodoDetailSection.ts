import { usePathname, useRouter, redirect } from "next/navigation";

export const useTodoDetailSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/")[pathname.split("/").length - 1];

  return {
    router,
    redirect,
    path,
  };
};
