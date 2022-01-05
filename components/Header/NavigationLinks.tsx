import Link from "next/link";
import React from "react";
import { NavigationLink } from "../../types/globalTypes";
import SmartLink from "../SmartLink";

type NavigationLinksProps = {
  navigation: NavigationLink[];
};

const NavigationLinks = ({ navigation }: NavigationLinksProps) => {
  return (
    <>
      {navigation.map((link) => {
        const { name, href } = link;
        return (
          <div className="px-4 cursor-pointer" key={name}>
            <SmartLink link={name} url={href} />
          </div>
        );
      })}
    </>
  );
};

export default NavigationLinks;
