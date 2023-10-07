export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { postId, userId } = req.body;
  
    try {
      await connectToDB();
  
      // Find the post by its ID
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      // Check if the user has already liked the post
      if (post.likes.includes(userId)) {
        return res.status(400).json({ error: "You have already liked this post" });
      }
  
      // Add the user's ID to the list of likes
      post.likes.push(userId);
  
      // Save the updated post
      await post.save();
  
      return res.status(200).json({ message: "Post liked successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  