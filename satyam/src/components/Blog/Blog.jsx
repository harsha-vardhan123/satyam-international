import React, { useState } from 'react';
import "./Blog.css";

const Blog = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className='mt-16 md:m-20 '>

            <div className="grid grid-cols-1  gap-4 place-items-center  p-6">
                {/* Headings */}
                <h1 data-aos="fade-up" className='heading text-3xl md:text-4xl'><span className='text-[#FAA327]'>BLOG </span>POST AND EVENTS</h1>
                <p data-aos="fade-up" className='sub-heading text-2xl md:text-3xl text-center'>DISCOVER WHATS TRENDING IN OUR SCHOOL</p>

                {/* Card */}
                <div className='flex flex-col md:flex-row justify-center items-center'>

                    {/* Card-1 */}
                    <div data-aos="fade-up" data-aos-delay="200" className="blog-card">

                        <img src="./images/19_Makar Sankranti.webp" alt="Image" className="blog-card-img " />
                        <div className='blog-card-overlay'>
                            <h1 className='blog-title'>Makara sankranthi</h1>
                            <p className='blog-desc'>Flying high on the joy of Makar Sankranti</p>
                        </div>
                    </div>


                    {/* Card-2 */}
                    <div data-aos="fade-up" data-aos-delay="800" className="blog-card">

                        <img src="./images/19_Makar Sankranti.webp" alt="Image" className="blog-card-img " />
                        <div className='blog-card-overlay'>
                            <h1 className='blog-title'>Makara sankranthi</h1>
                            <p className='blog-desc'>Flying high on the joy of Makar Sankranti</p>
                        </div>
                    </div>


                    {/* Card-3 */}
                    <div data-aos="fade-up" data-aos-delay="1200" className="blog-card">

                        <img src="./images/19_Makar Sankranti.webp" alt="Image" className="blog-card-img " />
                        <div className='blog-card-overlay'>
                            <h1 className='blog-title'>Makara sankranthi</h1>
                            <p className='blog-desc'>Flying high on the joy of Makar Sankranti</p>
                        </div>
                    </div>













                </div>
                <div data-aos="fade-up" data-aos-delay="1400" className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center'>
                    <button className='btn-1'>Load More</button>
                    <button className='btn-2'>Follow Us</button>
                </div>

            </div>




        </div>
    )
}

export default Blog;
