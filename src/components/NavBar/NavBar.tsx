import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import DropdownProfile from './DropdownProfile';
import { GrMenu } from 'react-icons/gr';
import { auth } from '../../../firebase';
import { toggleAsideState, toggleProfileState } from '@/recoil/common';

const NavBar = () => {
  const user = auth.currentUser;
  const [isProfileOpen, setIsProfileOpen] = useRecoilState(toggleProfileState);
  const [isAsideOpen, setIsAsideOpen] = useRecoilState(toggleAsideState);

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
          Nutube
        </Link>
      </div>

      <div className="relative flex items-center gap-4">
        {user ? (
          <>
            <Link href="/video/upload" className="mr-2">
              Upload
            </Link>
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
          </>
        ) : (
          <>
            <Link href="/login" className="mr-2">
              Login
            </Link>
            <Link href="/signup" className="mr-4">
              Signup
            </Link>
          </>
        )}
        {isProfileOpen && <DropdownProfile />}
      </div>
    </header>
  );
};

export default NavBar;
