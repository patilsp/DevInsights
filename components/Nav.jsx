"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/registry/new-york/ui/dropdown-menu";

import { useRouter } from 'next/navigation';

const Nav = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [providers, setProviders] = React.useState(null);
    const [toggleDropdown, setToggleDropdown] = React.useState(false);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    // Check if the session exists and if not, redirect to the authentication page
    useEffect(() => {
        if (!session?.user) {
            router.push("/authentication");
        }
    }, [session, router]);

    return (
        <nav className="flex-between mr-1 w-full">
            {session?.user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="avatar relative h-8 w-8 cursor-pointer rounded-full">
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
                            className="block w-full p-2 text-left text-sm hover:bg-slate-800 rounded-sm"
                        >
                            Sign Out
                        </button>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : null}
        </nav>
    );
};

export default Nav;
