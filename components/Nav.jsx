"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar";
import { Button } from "@/registry/new-york/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/registry/new-york/ui/dropdown-menu";

import Lottie from "lottie-react";
import animationData from "app/assets/logo.json";

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
        <nav className="flex-between w-full">
            {session?.user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="avatar relative h-8 w-8 rounded-full cursor-pointer">
                            <Image src={session?.user.image} width={32} height={32} className="rounded-full" alt="profile" onClick={() => setToggleDropdown(!toggleDropdown)} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                                <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href="/create-prompt">
                                <DropdownMenuItem>
                                    Create Post
                                    <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>

                            <Link href="/profile">
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/forms">
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/">
                                <DropdownMenuItem>
                                    Dashboard
                                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <button
                            type="button"
                            onClick={() => {
                                signOut();
                            }}
                            className="px-2 py-2 block text-sm w-full text-left hover:bg-slate-800"
                        >
                            Sign Out
                        </button>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className="black_btn"
                            >
                                Sign in
                            </button>
                        ))}
                </>
            )}
        </nav>
    );
};

export default Nav;
