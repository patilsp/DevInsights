"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PromptCard from "./PromptCard";
import { motion } from "framer-motion"

import Lottie from "lottie-react"
import animationData from "app/assets/skeleton.json"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-12 prompt_layout'>
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
  }, []);

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
    <section className="feed p-4 m-2" ref={scrollRef}>
      <form className="relative w-full flex-center">
        <div className="flex justify-between items-center p-4 bg-gray-900 text-white w-full">
          <div className="flex items-center">
            <h1 className="text-xl">My Feeds <span className="font-normal">⌘</span></h1>
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
                className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
              />
             <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs p-1">⌘</span>S
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

      {isLoading && 
      <div className="h-screen flex justify-center items-center">
      <Image
        src='assets/icons/loader.svg'
        width={100}
        height={100}
        alt='loader'
        className='object-contain'
      />
    </div>}

    </section>
  );
};

export default Feed;
