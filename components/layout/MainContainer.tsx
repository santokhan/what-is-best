import React from "react";
import type { NextPage } from "next";

interface Props {
  children?: React.ReactNode;
  className?: String;
}

function MainContainer({ children, className = "" }: Props) {
  return (
    <div className={"max-w-screen-xl mx-auto px-4 " + className}>
      {children}
    </div>
  );
}

export default MainContainer;
