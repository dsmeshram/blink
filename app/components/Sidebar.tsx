"use client"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import React, { useRef } from 'react'
import classNames from "classnames";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};

const SideBar = ({menuselect}) => {
  const navItems = defaultNavItems;
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
    
  );

  return (
    
      <div className="flex flex-col gap-2  m-4 w-[260px] border-small rounded-small border-default-300 dark:border-default-300">

        <Listbox
          aria-label="Multiple selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(item ) => menuselect(item) }
        >
          {navItems.map((item, index) => {
            return (
              <ListboxItem key={index} >
                <li
                  className={classNames({
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </ListboxItem>
            );
          })}
          </Listbox>
      </div>

  )
}

export default SideBar