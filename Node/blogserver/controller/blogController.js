import Blog from '../models/BlogSchema.js'
import User from '../models/UserSchema.js';

export const createBlog = async (req, res, next) => {
  const { title, content, topic } = req.body;

  // check user
  const userId = req.userId;

  const user = await User.findById(userId)

  if (!user) {
    res.status(404).json({ success: false, message: "User not found" })
  }

  try {
    let blog = new Blog({
      title,
      content,
      topic,
      user: {
        id: userId,
        name: user.name
      }
    })
    await blog.save();
    res.status(200).json({ success: true, message: "Blog created successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" })
  }
}

// Edit blog
export const editBlog = async (req, res, next) => {
  const blogId = req.params.id
  const userId = req.userId;

  try {
    const blog = await Blog.findById(userId);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" })
    }

    console.log("blog.user.id", blog.user.id);
    console.log("userId", userId);

    if (blog.user.id.toString() !== userId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorizd: You can't edit this blog" })
    }

    const updateBlog = await Blog.findByIdAndUpdate(
      blogId, { $set: req.body }, { new: true }
    )
    res.status(200).json({ success: true, message: "Blog updated successfully", data: updateBlog })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update blog" })
  }
}

// Delete Blog

export const deleteBlog = async (req, res, next) => {
  const blogId = req.params.id;
  const userId = req.userId;

  try {
    const blog = await Blog.findById(blogId);
    console.log("blog : ", blog);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    if (blog.user.id.toString() !== userId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorizd: You can't delete this blog" });
    }

    await Blog.findByIdAndDelete(blogId);

    return res.status(200).json({ success: true, message: "Blog deleted successfully." });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
};

// get All blogs

export const getAllBlog = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, message: "Blogs found successfully", data: blogs })
  } catch (error) {
    return res.status(404).json({ success: false, message: "No blogs found" })
  }
}

// get Single Blog

export const getSingleBlog = async (req, res, next) => {
  const blogId = req.params.id

  try {
    const blog = await Blog.findById(blogId)

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" })
    }

    return res.status(200).json({ success: false, message: "Blog found", data: blog })

  } catch (error) {
    return res.status(404).json({ success: false, message: "No blog found" })
  }
}