  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { useState } from "react";
  import { useSession } from "next-auth/react";
  import { usePathname, useRouter } from "next/navigation";
  import { motion } from "framer-motion";
  import { FiHeart, FiMessageSquare, FiShare } from 'react-icons/fi';
  import Button  from "@/components/share-button";
  import GithubCard from "@/components/github-card";

  const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");

    const handleProfileClick = () => {
      if (post.creator?._id === session?.user.id) return router.push("/profile");
      router.push(`/profile/${post.creator?._id}?name=${post.creator?.username}`);
    };

    const handleCopy = () => {
      setCopied(post.prompt);
      navigator.clipboard.writeText(post.prompt);
      setTimeout(() => setCopied(false), 3000);
    };

    return (
      

<div className="relative flex flex-row justify-center overflow-hidden prompt_layout">
  <div className="w-full mx-auto px-2 py-2">
    <div className="max-w-sm mx-auto flex gap-6 items-start lg:max-w-none">
                   
                  <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden shadow">
                      <div className="relative h-full bg-slate-900 p-4 pb-8 rounded-[inherit] z-20 overflow-hidden ">
                        
                          <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                              <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                          </div>
                          <div className="flex flex-col h-full">
                          <div className='flex justify-between items-start gap-5'>
                                <div
                                  className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                                  onClick={handleProfileClick}
                                >
                                  <Image
                                    src={post.creator?.image}
                                    alt='user_image'
                                    width={40}
                                    height={40}
                                    className='rounded-full object-contain border shadow'
                                  />

                                  <div className='flex flex-col'>
                                    <h3 className='font-semibold text-gray-200'>
                                      {post.creator?.username}
                                    </h3>
                                    <p className='font-inter text-sm text-gray-500'>
                                      {post.creator?.email}
                                    </p>
                                  </div>
                                </div>

                                <div className='copy_btn' onClick={handleCopy}>
                                  <Image
                                    src={
                                      copied === post.prompt
                                        ? "/assets/icons/tick.svg"
                                        : "/assets/icons/copy.svg"
                                    }
                                    alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                                    width={12}
                                    height={12}
                                  />
                                </div>
                              </div> 
                              <div className="relative inline-flex">
                                  <div className="w-[60%] h-[60%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-400" aria-hidden="true"></div>
                                  <div className='my-4'>  
                                      <Image
                                        src={post.imagePath}
                                        alt='post_image'
                                        width={500} 
                                        height={300}
                                        className="rounded-sm"
                                      />
                                    </div>
                              </div>
                              <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-400">Mar 16, 2023</time>
                                  <p
                                  className='font-inter text-sm blue_gradient bg-orange-500 cursor-pointer rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                                  onClick={() => handleTagClick && handleTagClick(post.tag)}
                                >
                                  {post.tag}
                                </p>
                              </div>
                              <div className="grow mb-5">
                              <Link href={post.link}>
                                <h2 className="text-xl text-slate-200 font-bold mb-1 hover:text-indigo-600">{post.title}</h2>
                              </Link>
                                
                                  <div className="mt-4 text-slate-400 dark:text-slate-300"><p>{post.prompt}</p></div>
                              </div>
                              <div className="border-t py-2"></div>
                            
                              

                              <div className="flex justify-between gap-5">
                                <Button text="Like" icon={<FiHeart className="fill-slate-500 mr-2" />} />
                                <Button
                                  text="Comment"
                                  icon={<FiMessageSquare className="fill-slate-500 mr-2" />}
                                />
                                <Button
                                  text="Share"
                                  icon={<FiShare className="fill-slate-500 mr-2" />}
                                />

                              
                              </div>

                              {session?.user.id === post.creator?._id && pathName === "/profile" && (
                                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                                  <p
                                    className='font-inter green_gradient cursor-pointer inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
                                    onClick={handleEdit}
                                  >
                                    Edit
                                  </p>
                                  <p
                                    className='font-inter orange_gradient font-inter cursor-pointer inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150'
                                    onClick={handleDelete}
                                  >
                                    Delete
                                  </p>
                                </div>
                              )}
                          </div>
                      </div>
                  </div>

              
          
              </div>
              

          </div>
      </div>


    );
  };


  export default PromptCard;
