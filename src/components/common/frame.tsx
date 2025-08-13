import { cn } from "@/lib/utils";
import React from "react";

const Frame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "@container/main relative h-full overflow-clip font-serif text-black dark:text-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Frame;
