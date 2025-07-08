import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Find answers to common questions about Royal Oak Academy's programs, admission process, facilities, and student life. We're here to help you make informed decisions about your educational journey.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What makes Royal Oak Academy unique?</Accordion.Header>
                    <Accordion.Body>
                        Royal Oak Academy combines academic excellence with character development, offering world-class education rooted in Kenyan values. Our experienced faculty, modern facilities, and holistic approach to learning prepare students for success in higher education and life.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What is the admission process?</Accordion.Header>
                    <Accordion.Body>
                        Our admission process includes application submission, academic records review, entrance examination, and personal interview. We welcome students who demonstrate academic potential, good character, and commitment to learning. Contact our admissions office for detailed requirements and deadlines.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What facilities and resources are available?</Accordion.Header>
                    <Accordion.Body>
                        Our campuses feature modern classrooms, science laboratories, computer labs, libraries, sports facilities, and arts studios. We provide comprehensive resources including digital learning tools, counseling services, health facilities, and extracurricular programs to support student development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How do you support student success and well-being?</Accordion.Header>
                    <Accordion.Body>
                        We provide personalized academic support, mentorship programs, career guidance, and counseling services. Our small class sizes ensure individual attention, while our comprehensive wellness programs address physical, mental, and emotional health to help every student reach their full potential.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;