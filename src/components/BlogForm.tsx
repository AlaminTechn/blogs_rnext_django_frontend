"use client"
import React, {useState} from 'react';


interface BlogFormProps {
    onSubmit: (data: BlogFormData) => void;
    initialData?: Blog;
}

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


interface BlogFormData {
    title: string;
}

const BlogForm: React.FC<BlogFormProps> = ({onSubmit, initialData}) => {

    const [formData, setFormData] = useState<BlogFormData>(
        initialData || {title: ''},
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData)
    }


    return (
        <form onSubmit={handleSubmit}>

            <label>
                Title:
                <input type="text"
                       name="title"
                       value={formData.title}
                       onChange={handleChange}
                />
            </label>

            <button type="submit">Submit</button>

        </form>
    )

}


export default BlogForm;