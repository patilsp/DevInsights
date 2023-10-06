"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PromptCard from "./PromptCard";
import { motion } from "framer-motion"

import Lottie from "lottie-react"
import animationData from "app/assets/skeleton.json"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='prompt_layout mt-5'>
      {data.map((post) => (
        <motion.div
          key={post._id}
          className="card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut" }}
        >
          <PromptCard
            post={post}
            handleTagClick={handleTagClick}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // Ref for tracking scroll position
  const scrollRef = useRef(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts((prevPosts) => [...prevPosts, ...data]);
    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed " ref={scrollRef}>
      <form className="flex-center relative w-full">
        <div className="flex w-full items-center justify-between p-4 text-white">
          <div className="flex items-center">
            <h2 className="green_gradient sm:text-1xl font-extrabold tracking-tight">My Feeds <span className="font-normal">⌘</span></h2>
          </div>
          <div className="flex items-center space-x-4">
            
            <div className="relative w-full justify-start text-sm text-muted-foreground">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search post ..."
                value={searchText}
                onChange={handleSearchChange}
                required
                className="relative inline-flex h-9 w-full items-center justify-start rounded-md border border-input bg-transparent pl-2 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
              />
             <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="p-1 text-xs">⌘</span>S
            </kbd>
            </div>
          </div>
        </div>
      </form>
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}

    </section>
  );
};

export default Feed;
