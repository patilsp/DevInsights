  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { useState } from "react";
  import { useSession } from "next-auth/react";
  import { usePathname, useRouter } from "next/navigation";
  import { motion } from "framer-motion";
  import { FiHeart, FiMessageSquare, FiShare, FiMoreVertical } from 'react-icons/fi';
  import  Button  from "@/components/share-button";

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
      
<div className="prompt_layout relative flex flex-row justify-center overflow-hidden">
  
<motion.div
    initial={{ opacity: 0, y: 50 }}   
    animate={{ opacity: 1, y: 0 }}   
    transition={{ duration: 1, delay: 0.5 }} 
  >
  <div className="mx-auto w-full p-2">
    <div className="mx-auto flex max-w-sm items-start gap-6 lg:max-w-none">
                   
                  <div className="relative h-full overflow-hidden rounded-3xl p-px shadow before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-main before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-700 after:opacity-0 after:blur-[100px] after:transition-opacity after:duration-500 after:hover:opacity-10 before:group-hover:opacity-100 border hover:border-white">
                      <div className="relative z-20 h-full overflow-hidden rounded-[inherit]    p-4 ">
                        
                          <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2" aria-hidden="true">
                              <div className="translate-z-0 absolute inset-0 rounded-full blur-[80px]"></div>
                          </div>
                          <div className="flex h-full flex-col">
                          <div className='flex items-start justify-between gap-5'>
                                <div
                                  className='flex flex-1 cursor-pointer items-center justify-start gap-1'
                                  onClick={handleProfileClick}
                                >
                                  <Image
                                    src={post.creator?.image}
                                    alt='user_image'
                                    width={35}
                                    height={35}
                                    className='rounded-full border-white object-contain shadow'
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

                                <Button
                                  
                                  icon={<FiMoreVertical className="fill-slate-500"  />}
                                />

                                {/* <div>
                                  <FiMoreVertical className="fill-slate-500 bg-transparent h-5 w-5" />
                                </div> */}

                                {/* <div className='copy_btn' onClick={handleCopy}>
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
                                </div> */}
                              </div> 
                              <div className="relative inline-flex">
                                  <div className="absolute inset-0 z-10 m-auto h-6 w-6 rounded-full bg-indigo-400 blur-3xl" aria-hidden="true"></div>
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
                              <div className="flex justify-between gap-5 text-xs">
                                <time dateTime="2020-03-16" className="text-xs text-gray-400">Mar 16, 2023</time>
                                <p className="text-xs text-gray-400"> 5min Read</p>
                                  <p
                                  className='font-inter cursor-pointer rounded-sm border px-1 text-xs'
                                  onClick={() => handleTagClick && handleTagClick(post.tag)}
                                >
                                 {post.tag}
                                </p>
                              </div>
                              <div className="mb-2 grow">
                              <Link href={post.link}>
                                <h2 className=" mb-1 font-bold text-slate-200 hover:text-indigo-600">{post.title}</h2>
                              </Link>
                                
                                  <div className="mt-4 text-sm text-slate-400 dark:text-slate-300"><p>{post.prompt}</p></div>
                              </div>
                              <div className="border-t"></div>
                            
                              

                              <div className="flex justify-between gap-5">
                                <Button text="5" icon={<FiHeart className="mr-2 border-none fill-slate-500" />} />
                                <Button
                                  text="10"
                                  icon={<FiMessageSquare className="mr-2 fill-slate-500" />}
                                />
                                <Button
                                  text="Share"
                                  icon={<FiShare className="mr-2 fill-slate-500" />}
                                />

                              
                              </div>

                              {session?.user.id === post.creator?._id && pathName === "/profile" && (
                                <div className='flex-center mt-5 gap-4 border-t border-gray-100 pt-3'>
                                  <p
                                    className='font-inter orange_gradient inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600'
                                    onClick={handleEdit}
                                  >
                                    Edit
                                  </p>
                                  <p
                                    className='font-inter orange_gradient font-inter inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600'
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
      
      </motion.div>
      </div>
    );
  };


  export default PromptCard;
