import React from "react";

export const Container = ({ children }: { children: React.ReactElement }) => {
  return <div className="max-w-screen-xl px-8 mx-auto">{children}</div>;
};
