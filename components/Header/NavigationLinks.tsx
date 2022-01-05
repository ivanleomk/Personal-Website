import Link from "next/link";
import React from "react";
import { NavigationLink } from "../../types/globalTypes";

type NavigationLinksProps = {
  navigation: NavigationLink[];
};

const NavigationLinks = ({ navigation }: NavigationLinksProps) => {
  return (
    <div className="ml-10 space-x-8 lg:block leading-5">
      {navigation.map((link) => (
        <div className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;
