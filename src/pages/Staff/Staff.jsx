import React from 'react';
import './Staff.css';
import { Card } from 'react-bootstrap';

const allStaff = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1639432040718-2231baf9c694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbWJlcnMlMjBvZiUyMHRlYWNoaW5nJTIwc3RhZmYlMjBpbiUyMGFuJTIwa2VueWFuJTIwc2Nob29sfGVufDB8fDB8fHww',
        name: 'English Department Faculty',
        department: 'English Department',
        description: 'Our dedicated English department faculty brings years of experience in language arts, literature, and communication skills.'
    },
    {
        id: 2,
        img: 'https://plus.unsplash.com/premium_photo-1739997055431-785219159a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVtYmVycyUyMG9mJTIwdGVhY2hpbmclMjBzdGFmZiUyMGluJTIwYW4lMjBrZW55YW4lMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D',
        name: 'Creative Arts Faculty',
        department: 'Creative Arts Department',
        description: 'Our creative arts faculty specializes in nurturing artistic talents through music, visual arts, drama, and dance.'
    },
    {
        id: 3,
        img: 'https://plus.unsplash.com/premium_photo-1713890424186-11d3584a22fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Leadership Team',
        department: 'Academic Leadership',
        description: 'Our leadership team collaborates regularly to ensure the highest standards of education at Royal Oak Academy.'
    },
    {
        id: 4,
        img: 'https://plus.unsplash.com/premium_photo-1682284353512-bf15fd4539d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbHMlMjB0ZWFjaGVyc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Library Services Team',
        department: 'Library & Information Services',
        description: 'Our dedicated librarian supports student learning through comprehensive library services and research assistance.'
    },
    {
        id: 5,
        img: 'https://media.istockphoto.com/id/1364388460/photo/cheerful-black-teacher-standing-outside-education-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=iPZfeQn-JKIokh4o98C-MmLRJtVgJCXkU_1D894xo3M=',
        name: 'School Nurse',
        department: 'Health Services',
        description: 'Our qualified school nurse ensures the health and wellbeing of all students and staff at Royal Oak Academy.'
    },
    {
        id: 6,
        img: 'https://plus.unsplash.com/premium_photo-1683195785758-9906a4ccf554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29scyUyMHRlYWNoZXJzfGVufDB8fDB8fHww',
        name: 'Science Department Faculty',
        department: 'Science Department',
        description: 'Our science faculty brings expertise in biology, chemistry, and physics to inspire scientific inquiry and discovery.'
    }
];

function Staff() {
  return (
    <div className='staff-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Staff</h1>
                <p className='text-center w-75 mb-5'>Meet the dedicated educators who make Royal Oak Academy a center of excellence in Kenyan education.</p>
            </div>
        </header>

        <div className='container my-5'>
            <h2 className='text-center mb-5'>Our Faculty & Staff</h2>
            <div className='row g-4'>
                {allStaff.map((staff) => (
                    <div key={staff.id} className='col-lg-4 col-md-6'>
                        <Card className='h-100 shadow hover-effect'>
                            <Card.Img variant="top" src={staff.img} style={{height: '250px', objectFit: 'cover'}} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='text-center'>{staff.name}</Card.Title>
                                <Card.Subtitle className='mb-3 text-muted text-center'>{staff.department}</Card.Subtitle>
                                <Card.Text className='flex-grow-1'>{staff.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Staff;