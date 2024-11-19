import React from 'react';
import { IoMdHome, IoMdCloudyNight } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { id: 1, label: <IoMdHome />, isIcon: true },
    { id: 2, label: 'Experience', isIcon: false },
    { id: 3, label: 'About', isIcon: false },
    { id: 4, label: 'Project', isIcon: false },
    { id: 5, label: <IoMdCloudyNight />, isIcon: true },
  ];

  return (
    <div className="border-b ">
      <ul className="flex justify-center gap-20 items-center text-[20px] text-gray-500">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-white cursor-pointer flex items-center"
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
