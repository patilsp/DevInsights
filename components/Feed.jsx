"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='prompt_layout sm:mb-40'>
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
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [selectedTag, setSelectedTag] = useState("My Feeds");
  const scrollRef = useRef(null);

  // Fetch posts from API
  const fetchPosts = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const response = await fetch("/api/post");
    const data = await response.json();

    // Prepend new posts to the beginning of the list
    setAllPosts((prevPosts) => {
      const newPosts = data.filter(post => !prevPosts.some(existingPost => existingPost._id === post._id));
      return [...newPosts, ...prevPosts];
    });
    setIsLoading(false);
  };

  // Handle scroll event to load more posts
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

  // Filter posts based on search text
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.description)
    );
  };

  // Handle input changes for search
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // Debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSelectedTag(tagName);
  };

  const getUniqueTags = () => {
    const tags = allPosts.map(post => post.tag);
    return ["My Feeds", ...new Set(tags)];
  };

  const displayedPosts = selectedTag === "My Feeds"
    ? allPosts
    : allPosts.filter(post => post.tag === selectedTag);

  return (
    <section className="feed" ref={scrollRef}>
      <form className="relative w-full">
        
          <div className="block md:flex w-full items-center justify-between p-1 md:p-2">
          <div className="tags mb-4">
            <div className="tabs-container">
              <div className="tabs-list">
                {getUniqueTags().map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`tab-button ${selectedTag === tag ? 'bg-green-500 text-blue' : 'bg-gray-200 text-black dark:bg-black dark:text-white'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-full justify-start text-sm text-muted-foreground">
              <input
                type="text"
                placeholder="Search post ..."
                value={searchText}
                onChange={handleSearchChange}
                className="relative inline-flex h-9 w-full items-center justify-start rounded-md border border-input bg-transparent pl-2 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
              />
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="p-1 text-xs">⌘</span>S
              </kbd>
            </div>
          </div>
           
          </div>
         
      
      </form>

      <PromptCardList
        data={searchText ? searchedResults : displayedPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
