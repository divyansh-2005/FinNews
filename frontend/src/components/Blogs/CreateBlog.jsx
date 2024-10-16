import React, { useState } from 'react';
import './CreateBlog.css'; // Import the CSS file

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        content: '',
        id: '', // Add an id field
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Generate a unique ID for the blog post
        const uniqueId = uuidv4();
        const blogPost = { ...formData, id: uniqueId }; // Add the ID to formData

        try {
            const response = await axios.post('http://localhost:5000/api/post-blog', blogPost, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Response:', response.data);
            // console.log(response.json)
            setFormData({ title: '', author: '', date: '', content: '', id: '' }); // Reset form data
            alert('Blog created successfully.');
            navigate('/blogs');
        } catch (error) {
            console.error('Error:', error);
            setErrors('There was an issue with your submission. Please try again later.');
        } finally {
            setLoading(false); // Stop loading
        }
        console.log(formData)
    };

    return (
        <>
            <div className='main'>


                <div className="create-blog-container">
                    <h1>Create a New Blog Post</h1>
                    <form onSubmit={handleSubmit} className="blog-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateBlog;
