import BlogForm from "@/components/BlogForm"
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";



const EditBlogPage: React.FC = () => {

      const router = useRouter();
      const { id } = router.query;
      const [blog, setBlog] = useState(null)


      useEffect(() => {
            const featchBlog = async () => {
                  const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`)
                  setBlog(response.data)
            }
            if (id) {
                  featchBlog()
            }

      }, [id])



      const handleSubmit = async (data: any) => {
            try {
                  await axios.put(`http://127.0.0.1:8000/api/blogs/${id}`, data);
                  router.push(`/blogs/${id}`)

            } catch (error) {
                  console.log(error);
            }

      }

      if (!blog) {
            return <p>Loading.......</p>
      }


      return (
            <div>
                  <h2>Edit Blog</h2>
                  <BlogForm onSubmit={handleSubmit} initialData={blog} />
            </div>
      )
}

export default EditBlogPage;