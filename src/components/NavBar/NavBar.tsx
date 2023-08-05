import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownProfile from './DropdownProfile';
import { GrMenu } from 'react-icons/gr';

interface NavBarProps {
  setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ setIsAsideOpen }: NavBarProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuClick = () => {
    setIsAsideOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between w-full p-4 bg-white border-b border-gray-100 shadow-aside">
      <div className="flex items-center space-x-3">
        <button type="button" className="text-3xl" onClick={handleMenuClick}>
          <GrMenu />
        </button>
        <Link href="/" className="block ml-2 text-3xl font-bold text-red-500">
          Nutube!
        </Link>
      </div>

      <div className="relative flex items-center gap-4">
        <Link href="/login">Login</Link>
        <button
          type="button"
          onClick={handleProfileClick}
          className="overflow-hidden align-top rounded-full h-9 w-9"
        >
          <Image
            src="https://plchldr.co/i/40x40?text=T"
            alt="Avatar"
            width={40}
            height={40}
          />
        </button>
        {isProfileOpen && <DropdownProfile />}
      </div>
    </header>
  );
};

export default NavBar;
