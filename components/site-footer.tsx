"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Github, Dribbble, Home, Users, Edit, Search, Settings } from 'lucide-react';

export function SiteFooter() {

  return (
      <footer className="fixed bottom-0 z-50 w-full border-t border-gray-200 bg-white py-2 dark:border-gray-600 dark:bg-black dark:text-white md:hidden">
        <div className="mx-auto grid h-full max-w-lg grid-cols-4">
         
          <a href="/" data-tooltip-target="tooltip-home" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Home className="mb-1 size-6  text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500" />
            <span className="sr-only">Home</span>
          </a>
          <div id="tooltip-home" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          

          <a href="/posts" data-tooltip-target="tooltip-post" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Users className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-orange-500" />
            <span className="sr-only">posts</span>
          </a>
          
          <a href="/" data-tooltip-target="tooltip-post" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Edit className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-orange-500" />
            <span className="sr-only">New Post</span>
          </a>
          <div id="tooltip-post" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            New Complaint
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          
          <a href="/forms" data-tooltip-target="tooltip-post" type="button" className="group inline-flex flex-col items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Settings className="mb-1 size-6 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-orange-500" />
            <span className="sr-only">Settings</span>
          </a>

         
        </div>
    </footer>
  );
}
