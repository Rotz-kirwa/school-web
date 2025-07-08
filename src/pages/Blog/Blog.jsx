import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Digital Learning Revolution',
        description: 'Exploring how technology is transforming education at Royal Oak Academy. From interactive whiteboards to virtual laboratories, discover how we integrate modern tools to enhance student learning experiences.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Student Success Stories',
        description: 'Meet our outstanding graduates who are making a difference in Kenya and beyond. Read inspiring stories of academic excellence, leadership, and community impact from Royal Oak Academy alumni.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Innovative Teaching Methods',
        description: 'Discover the creative and effective teaching strategies our faculty uses to engage students. From project-based learning to collaborative problem-solving, see how we make education exciting and meaningful.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Community Engagement Programs',
        description: 'Learn about our initiatives that connect students with local communities. From environmental conservation projects to literacy programs, see how Royal Oak Academy students give back to society.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'STEM Excellence Initiative',
        description: 'Explore our comprehensive Science, Technology, Engineering, and Mathematics programs. Discover state-of-the-art laboratories, robotics clubs, and coding workshops that prepare students for the digital future.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Cultural Heritage Celebration',
        description: 'Celebrating Kenya\'s rich cultural diversity through education. Learn how we incorporate traditional values, languages, and customs into our modern curriculum while preparing students for global citizenship.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Sports and Wellness Program',
        description: 'Promoting physical fitness and mental well-being through comprehensive sports programs. From athletics to team sports, discover how we develop healthy, confident, and disciplined students.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Parent-School Partnership',
        description: 'Building strong relationships between families and educators. Learn about our parent engagement programs, communication strategies, and collaborative approaches to student development and success.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Future-Ready Skills Development',
        description: 'Preparing students for tomorrow\'s challenges through critical thinking, creativity, and leadership development. Explore our programs that build 21st-century skills essential for success in higher education and careers.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Stay informed with the latest insights, educational trends, and inspiring stories from Royal Oak Academy. Discover how we're shaping the future of education in Kenya.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;