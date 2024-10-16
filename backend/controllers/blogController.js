const Blog = require('../models/blog');  // Import the Blog model

// Function to handle creating a new blog post
exports.postBlog = async (req, res) => {
    try {
        const { title, author, content } = req.body;
        console.log("Received blog data = ", req.body);

        if (!title || !author || !content) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBlog = new Blog({ title, author, content });

        const result = await newBlog.save();
        console.log("Blog saved:", result);

        res.status(201).json({ message: "Blog post created successfully", blog: result });
    } catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ message: "Error creating blog post", error });
    }
};





// Function to handle deleting all blog posts
exports.deleteAllBlogs = async (req, res) => {
    try {
        // Delete all blog posts from the database
        const result = await Blog.deleteMany();

        console.log("All blogs deleted:", result);

        // Send a success response
        res.status(200).json({ message: "All blog posts deleted successfully", result });
    } catch (error) {
        console.error("Error deleting all blog posts:", error);
        res.status(500).json({ message: "Error deleting all blog posts", error });
    }
};


exports.getBlog = async (req, res) => {
    try {
        // Retrieve all blog posts from the database
        const blogs = await Blog.find();

        // Send the list of blog posts
        res.status(200).json({ message: "All blog posts retrieved successfully", blogs });
    } catch (error) {
        console.error("Error retrieving all blog posts:", error);
        res.status(500).json({ message: "Error retrieving all blog posts", error });
    }

};


// exports.deleteBlog = async (req, res) => {
//     const { id } = req.params; // Assuming you're passing the blog ID as a URL parameter

//     try {
//         // Find the blog post by ID and delete it
//         console.log("deleting iteam")
//         const deletedBlog = await Blog.findByIdAndDelete(id);

//         // If blog post not found, send 404
//         if (!deletedBlog) {
//             return res.status(404).json({ message: "Blog post not found" });
//         }

//         // Send a success response
//         res.status(200).json({ message: "Blog post deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting blog post:", error);
//         res.status(500).json({ message: "Error deleting blog post", error });
//     }
// };
