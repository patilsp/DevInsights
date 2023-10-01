"use client";


import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full'>
      <div className='flex relative'>
        {session?.user ? (
          <div className='flex'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="avatar">
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="right-50 z-10 w-64 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex gap-1 space-y-1 ml-1 p-1">
                      <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session?.user.email}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="py-1" role="none">
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                      <Link href='/create-prompt' className='dropdown_link'>
                        Create Prompt
                      </Link>
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                      <Link
                        href='/'
                        className='dropdown_link'
                        onClick={() => setToggleDropdown(false)}
                      >
                        Dashboard
                      </Link>
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
                      <Link
                        href='/profile'
                        className='dropdown_link'
                        onClick={() => setToggleDropdown(false)}
                      >
                        My Profile
                      </Link>
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm dropdown_link" role="menuitem" tabIndex="-1" id="menu-item-2">Settings</a>
                    <hr className="mt-2 mb-2" />
                    <button
                      type='button'
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className='text-gray-700 block px-4 py-2 text-sm dropdown_link'
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
