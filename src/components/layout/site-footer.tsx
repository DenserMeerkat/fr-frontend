import { Link, useLocation } from "@tanstack/react-router";
import { navItems } from "@/constants";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function useNavigation() {
  const location = useLocation();

  const currentIndex = navItems.findIndex(
    (item) => item.url === location.pathname,
  );

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return {
    prev: prevItem ? { title: prevItem.title, url: prevItem.url } : null,
    next: nextItem ? { title: nextItem.title, url: nextItem.url } : null,
  };
}

export function SiteFooter() {
  const { prev, next } = useNavigation();

  return (
    <footer className="bg-background sticky bottom-0 z-50 h-14 shrink-0 rounded-b-xl border-t px-4 py-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="mx-auto grid w-72 grid-cols-2 gap-2">
        {prev ? (
          <Link
            to={prev.url}
            className={cn("w-full", buttonVariants({ variant: "outline" }))}
          >
            <IconChevronLeft className="mr-2" />
            Prev
          </Link>
        ) : (
          <Button disabled className="w-full" variant="outline">
            <IconChevronLeft className="mr-2" />
            Prev
          </Button>
        )}
        {next ? (
          <Link
            to={next.url}
            className={cn("w-full", buttonVariants({ variant: "outline" }))}
          >
            Next
            <IconChevronRight className="ml-2" />
          </Link>
        ) : (
          <Button disabled className="w-full" variant="outline">
            Next
            <IconChevronRight className="ml-2" />
          </Button>
        )}
      </div>
    </footer>
  );
}
