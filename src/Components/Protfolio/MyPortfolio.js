import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const MyPortfolio = () => {
    return (
        <div>
            <Header></Header>
            <div className="font-bold space-y-4 md:w-1/2 mx-auto my-24 p-8">
                <img className='w-32 md:w-64 border-2 border-primary' src="https://i.ibb.co/4SYzL4s/rsz-1img-3052-2-MB-realres.jpg" alt="" />
                <h1 className="text-2xl font-bold text-primary">AL KAFIUL ISLAM</h1>
                <p>Email address: m.alkafi2016@gmail.com</p>
                <p>Phone Number: +8801782627645</p>
                <p>LinkedIn: <a className='text-blue-600 underline' href="https://www.linkedin.com/in/al-kafiul-islam-54836718a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkkSz2pX1TYK644SqFP9ufw%3D%3D">LinkedIn Profile</a></p>
                <p>Education: Yangzhou University, China</p>
                <p>Skills: <br />
                    ● Expertise: React.js, JavaScript,
                    HTML, CSS, Bootstrap, Tailwind,
                    Material UI, C, Java. <br />
                    ● Comfortable: Node.js, Express.js,
                    MongoDB. Styled Components. <br />
                    ● Familiar: Redux, Context API,
                    REST API, Browser APIs. <br />
                    ● Tools: Git, Github,VS Code,
                    Chrome Dev Tool, Firebase,
                    Heroku, Netlify, Figma, JWT,
                    Stripe, <br />
                    ● Interpersonal Skills: Leadership,
                    Team Work, Organizing.</p>
                <div className='space-y-2'>
                    <h1>My 3 Best Projects are:</h1>
                    <div className='ml-4'>
                        <p><a className="text-blue-600 underline" href="https://bwell-psychotherapy.web.app/">Bwell Pshycotherapy</a></p>
                        <p><a className="text-blue-600 underline" href="https://t-fashion-warehouse.web.app/">T-Fashion Warehouse</a></p>
                        <p><a className="text-blue-600 underline" href="https://bibliophile-reviews.netlify.app/">Bibliophiles Reviews</a></p>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;