'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BreadcrumbContextType {
  breadcrumbs: { name: string; url: string }[];
  updateBreadcrumbs: (path: string, name: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined
);

export const BreadcrumbProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; url: string }[]
  >([]);

  const updateBreadcrumbs = (path: string, name: string) => {
    setBreadcrumbs((prev) => {
      const newBreadcrumb = { name, url: path };
      const existingIndex = prev.findIndex((crumb) => crumb.url === path);

      if (existingIndex !== -1) {
        return [...prev.slice(0, existingIndex + 1)];
      } else {
        return [...prev, newBreadcrumb];
      }
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, updateBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};
