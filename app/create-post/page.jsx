"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Form from "@/components/Form";

const createPost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", description: "", tag: "", imagePath: "", link: "", createdDate:""});

  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          userId: session?.user.id,
          tag: post.tag,
          imagePath: post.imagePath,
          link: post.link,
          createdDate: post.createdDate,
        }),
      });

      if (response.ok) {
        toast.success("Post has been created! 🔥");
        router.push("/user-dashboard");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default createPost;
