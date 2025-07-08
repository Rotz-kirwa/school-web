import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Creative Arts Program',
        description: 'Unleash your creativity through visual arts, music, drama, and dance. Our comprehensive arts program develops artistic skills while building confidence, cultural appreciation, and creative problem-solving abilities.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Studies',
        description: 'Build entrepreneurial skills and business acumen through practical learning experiences. Students explore economics, accounting, marketing, and leadership while developing critical thinking for future business success.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science & ICT',
        description: 'Master digital literacy and programming skills essential for the modern world. From coding to robotics, students gain hands-on experience with cutting-edge technology and computational thinking.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Educational Leadership',
        description: 'Develop teaching and leadership skills through our education program. Students learn pedagogy, child psychology, and educational management while gaining practical classroom experience.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Health Sciences',
        description: 'Explore the fascinating world of healthcare through biology, chemistry, and health education. Students gain foundational knowledge for careers in medicine, nursing, and public health.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Legal Studies',
        description: 'Understand justice, governance, and legal principles through our comprehensive law program. Students develop analytical thinking, debate skills, and understanding of constitutional and civil rights.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music & Performing Arts',
        description: 'Discover your musical talents through instrumental training, vocal performance, and music theory. Our program celebrates both traditional Kenyan music and contemporary global styles.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sports & Physical Education',
        description: 'Build physical fitness, teamwork, and leadership through comprehensive sports programs. From athletics to team sports, students develop discipline, resilience, and healthy lifestyle habits.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Discover our comprehensive range of academic programs designed to nurture talent, build character, and prepare students for success in higher education and beyond.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;