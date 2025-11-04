import React from 'react';
import { blog } from '@/app/api/data';
import BlogCard from './BlogCard';

const BlogSection: React.FC = () => {
    return (
        <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
            <div className="container mx-auto max-w-7xl px-4 space-y-14">
                <div className="blog-content text-center mb-18">
                    <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                        Our Blogs
                    </span>
                    <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
                        Latest Energy Insights
                    </h2>
                </div>
                <div className="blog-wrapper grid lg:grid-cols-2 gap-5">
                    {blog.slice(0, 1).map((item) => (
                        <BlogCard 
                            key={item.id}
                            {...item}
                            variant="large"
                        />
                    ))}
                    <div className="grid grid-cols-1 h-auto md:h-[620px] gap-5">
                        {blog.slice(1).map((item) => (
                            <BlogCard 
                                key={item.id}
                                {...item}
                                variant="small"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;