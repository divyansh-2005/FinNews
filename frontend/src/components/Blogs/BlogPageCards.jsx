import { useState, useEffect } from "react";
import './BlogPageCards.css';

import { Link, useNavigate } from "react-router-dom";
import profilepic from '../../assets/icon-2.png';
import axios from "axios";

const deleteBlog = async (id) => {
    try {
        console.log("Deleting blog with ID:", id);
        alert('Blog deleted successfully')
        window.location.reload();

    } catch (error) {
        console.log(error)
    }
}
const formatDate = (dateString) => {
    const date = new Date(dateString);


    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <div className="blog-card__header">
                <img src={profilepic} alt={blog.title} className="blog-card__image" />
                <div className="blog-card__info">
                    <h2 className="blog-card__title">{blog.title}</h2>
                    <p className="blog-card__meta">
                        By {blog.author} • {formatDate(blog.date)}
                    </p>
                </div>
            </div>
            <div className="blog-card__content">
                <p className="blog-card__description">
                    {blog.content}
                </p>
                <Link to={`/read-more-blog/${blog._id}`} className="blog-card__button">Read More</Link>
            </div>
        </div>
    );
};


const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

const BlogPageCard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            let response = await fetch('http://localhost:5000/api/get-blog')
            let data = await response.json()
            console.log('fetched data')
            console.log(data);
            setBlogs(data.blogs)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteAll = async () => {
        try {
            let res = await axios.delete('http://localhost:5000/api/delete-all-blog');
            alert('All blog deleted');
            fetchData();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
        // setBlogs(blogData)
    }, []);

    return (
        <>
            <div className="blog-page">
                <div className="header">
                    <h1 className="blog-page__title">Latest Blogs</h1>
                    <div>

                        <button className="create-blog-button" onClick={() => {
                            navigate("/create-blog")
                        }}>Create Blog</button>
                        {blogs.length > 0 &&
                            <button className="delete-blog-button" onClick={handleDeleteAll}>Delete All</button>}
                    </div>
                </div>
                {blogs.length > 0 ? <BlogList blogs={blogs} /> : <p>No blog to show...</p>}
            </div>
        </>
    );
};

export default BlogPageCard;
