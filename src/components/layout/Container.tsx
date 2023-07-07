import React from "react";

export const Container = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="max-w-screen-xl px-8 mx-auto">{children}</div>;
};
