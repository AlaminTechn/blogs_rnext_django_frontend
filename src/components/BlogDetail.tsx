"use client"
import React from 'react';


interface BlogDetailsProps {
      blog: Blog;
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



const BlogDetail: React.FC<BlogDetailsProps> = ( {blog} ) => {

      console.log(blog)

      return (
            <div>
                  <h2> {blog?.title} </h2>
                  <p> {blog?.description} </p>
            </div>
      )
}

export default BlogDetail;

