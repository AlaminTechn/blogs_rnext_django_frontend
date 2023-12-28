"use client"
// import Image from 'next/image'
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "@/components/BlogList";
import BlogForm from "@/components/BlogForm";

const Home: React.FC = () => {
    
    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        const fetchBlogs = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/blogs/')
            setBlogs(response.data?.data);
        }

        fetchBlogs();

    }, []);

    return (
        <div> 
            <h1 className="text-xl text-center font-bold my-4">Blog List</h1>
            <BlogList blogs={blogs} />          
        </div>
    )
}

export default Home;