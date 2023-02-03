import React from "react";

interface Props {
  children?: React.ReactNode | String;
  className?: String;
}

export default function ReadMore({
  children = "Read more >>",
  className,
}: Props) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4"
    >
      {children}
    </button>
  );
}
