import BlogForm from "@/components/BlogForm";
import axios from "axios";
import {useRouter} from "next/router";
import React from "react";


const New: React.FC = () => {
    const router = useRouter()

    const handleSubmit = async (data: any) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/blogs/', data)
            await router.push('/')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Create a new blogs </h2>
            <BlogForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default New;