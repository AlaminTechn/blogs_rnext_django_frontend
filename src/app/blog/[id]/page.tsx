"use client"
// import BlogDetail from "@/components/BlogDetail";
import { useParams,useRouter } from "next/navigation"
import React, { useEffect, useState } from "react";
import axios from "axios";


interface Blog {
    id: number;
    title: string;
    description: string;
    is_published: boolean;
    is_active: boolean;
    image: string;
    updated_at: string;
    created_at: string;
}



const BlogDetailPage: React.FC = () => {
    const params = useParams();
    const id = params.id;
    const router = useRouter()
    const [blog, setBlog] = useState<Blog | null>(null)


    useEffect(() => {

        const fetchBlog = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
            const result = response.data;
            setBlog(result);
        };

        fetchBlog();

    }, [id])


    if (!blog) {
        return <p>Loading...</p>
    }


    return (
        <div className="w-full mx-auto">

            <h2 className="text-2xl text-center my-12 font-bold">Blog Details</h2>

            {/* <BlogDetail blog={blog} /> */}

            <div className="w-80 h-auto mx-auto text-center border-2 rounded-xl">

                <h2>{blog?.title} </h2>
                <p>{blog?.description}</p>

                <button onClick={()=> router.push('/'), {scroll:false} }
                 className="inline-flex mt-12 m-1 p-2 bg-gray-400 text-gray-100 rounded-full">Back to Home</button>

            </div>

          

        </div>
    )

}

export default BlogDetailPage;