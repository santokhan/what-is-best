import React from "react";
import type { NextPage } from "next";
import ReadMore from "../ReadMore";

interface Props {
  children?: React.ReactNode;
  className?: String;
}

function Card({ children, className = "" }: Props) {
  return (
    <div className="w-full mb-10">
      <div className="bg-gray-50">
        <img
          src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2021/11/mixkit-smiling-woman-with-her-chin-in-her-hand-92-desktop-wallpaper-950x500.jpg"
          alt="card"
          className="w-full h-60 lg:h-96 object-cover"
        />
      </div>
      {children}
    </div>
  );
}

interface TitleProps {
  children?: React.ReactNode;
  className?: String;
}
function Image({ children, className = "" }: TitleProps) {
  return <img className="text-xl font-semibold py-3" />;
}
interface TitleProps {
  children?: React.ReactNode;
  className?: String;
}
function Title({ children, className = "" }: TitleProps) {
  return <h1 className="text-xl font-semibold py-3">{children}</h1>;
}

interface DescProps {
  children?: React.ReactNode;
  className?: String;
}
function Desc({ children, className = "" }: DescProps) {
  return <p className="text-lg font-medium text-gray-500">{children}</p>;
}

export const MainCard = { Card, Image, Title, Desc };
