"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/registry/new-york/ui/input"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"

interface Post {
  _id: string
  creator: {
    username: string
  }
  tag: string
  description: string
}

interface PromptCardProps {
  post: Post
  handleTagClick: (tag: string) => void
}

const PromptCard: React.FC<PromptCardProps> = ({ post, handleTagClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="font-bold text-lg mb-2">{post.creator.username}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{post.description}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleTagClick(post.tag)}
      >
        {post.tag}
      </Button>
    </div>
  )
}

const PromptCardList: React.FC<{ data: Post[], handleTagClick: (tag: string) => void }> = ({ data, handleTagClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
      {data.map((post) => (
        <motion.div
          key={post._id}
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
  )
}

const Feed: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [selectedTag, setSelectedTag] = useState("All Feeds")
  const scrollRef = useRef<HTMLDivElement>(null)

  const fetchPosts = async () => {
    if (isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/post")
      const data: Post[] = await response.json()

      setAllPosts((prevPosts) => {
        const newPosts = data.filter(post => !prevPosts.some(existingPost => existingPost._id === post._id))
        return [...newPosts, ...prevPosts]
      })
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
        fetchPosts()
      }
    }
  }, [isLoading])

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  const filterPosts = useCallback(() => {
    return allPosts.filter((post) => {
      const matchesSearch = searchText === "" || 
        post.creator.username.toLowerCase().includes(searchText.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        post.description.toLowerCase().includes(searchText.toLowerCase())

      const matchesTag = selectedTag === "All Feeds" || post.tag === selectedTag

      return matchesSearch && matchesTag
    })
  }, [allPosts, searchText, selectedTag])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleTagClick = (tagName: string) => {
    setSelectedTag(tagName)
  }

  const getUniqueTags = () => {
    const tags = allPosts.map(post => post.tag)
    return ["All Feeds", ...new Set(tags)]
  }

  const filteredPosts = filterPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div className="flex flex-wrap gap-2">
          {getUniqueTags().map((tag) => (
            <Button
              key={tag}
              variant="ghost"
              size="sm"
              onClick={() => handleTagClick(tag)}
              className={selectedTag === tag ? "text-primary border-primary" : ""}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchText}
            onChange={handleSearchChange}
            className="pl-8"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-200px)]" ref={scrollRef}>
        <PromptCardList
          data={filteredPosts}
          handleTagClick={handleTagClick}
        />
        {isLoading && (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}

export default Feed