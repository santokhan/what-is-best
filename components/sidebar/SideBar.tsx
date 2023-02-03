import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export default function SideBar({ children }: Props) {
  const [scrollH, setscrollH] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setscrollH(window.scrollY);

      console.log(scrollH);
    };
  }, [scrollH]);

  return (
    <aside className="w-[400px]">
      <div className="bg-gray-50 px-8 py-8">
        <div>
          <h3 className="text-xl font-medium">Written and researched by:</h3>
        </div>

        <div className="py-3">
          <h3 className="text-xl font-semibold py-2 border-b-4 border-blue-500">
            On this page
          </h3>
          <ul className="space-y-3 py-4">
            <Item to={"/#wix"}>#1. Wix</Item>
            <Item to={"/#wix"}>#2. Squarespace</Item>
            <Item to={"/#wix"}>#3. Shopify</Item>
            <Item to={"/#wix"}>#4. GoDaddy</Item>
            <Item to={"/#wix"}>#5. Hostinger</Item>
            <Item to={"/#wix"}>#6. Weebly</Item>
            <Item to={"/#wix"}>#7. WordPress.com</Item>
            <Item to={"/#wix"}>#8. IONOS</Item>
            <Item to={"/#wix"}>#9. Site123</Item>
            <Item to={"/#wix"}>#10. Jimdo</Item>
          </ul>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-semibold py-2 border-b-4 border-blue-500">
            Top 3 website builders
          </h3>
          <ul className="space-y-3 py-4">
            <Item isActive to={"/#wix"}>
              #1. Wix
            </Item>
            <Item isActive to={"/#wix"}>
              #2. Squarespace
            </Item>
            <Item isActive to={"/#wix"}>
              #3. Shopify
            </Item>
          </ul>
        </div>
      </div>
    </aside>
  );
}

interface ItemProps {
  isActive?: boolean;
  to?: any;
  children?: React.ReactNode | String;
}

export function Item({ isActive, to, children }: ItemProps) {
  return (
    <li className="text-xl font-medium text-gray-500">
      <Link
        href={to}
        className={
          isActive ? "text-blue-500 hover:text-gray-500" : "hover:text-blue-500"
        }
      >
        {children}
      </Link>
    </li>
  );
}
