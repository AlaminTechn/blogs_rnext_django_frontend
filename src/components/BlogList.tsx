"use client"
import Link from 'next/link';
import React from 'react'

interface BlogListProps {
      blogs: Blog[];
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





const BlogList: React.FC<BlogListProps> = ({ blogs }) => {

      return (
            <div className='w-100 mx-auto mx-4'>
                  {blogs?.map((blog) => (
                        <div key={blog.id} className='flex justify-between bg-success text-xl border-2 p-4 max-w-full '>
                              <Link href={`/blog/${blog.id}`} >
                              <h3 className='text-green-800 hover:text-red-600'> {blog.title}</h3> </Link>
                              <small className='hover:text-red-600'> Time : {blog.created_at}</small>
                        </div>
                  ))}
            </div>
      )
}

export default BlogList;