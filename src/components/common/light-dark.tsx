"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LightDarkComponent = ({
  LightComponent,
  DarkComponent,
}: {
  LightComponent: React.ReactNode;
  DarkComponent: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return theme === "dark" ? DarkComponent : LightComponent;
};

export default LightDarkComponent;
