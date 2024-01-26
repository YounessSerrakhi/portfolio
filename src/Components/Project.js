import React, { useState } from 'react';
import ImageModal from './ImageModal';
import '../Assets/css/style.css'; // Adjust the path as needed for your stylesheet


export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const projectsData = [
    {
        title: 'Web Applications to manage a pharmacy',
        description: 'This project is a web application to manage a pharmacy, it allows the user to manage the pharmacy\'s stock, the orders, the sales, the customers, the suppliers, the client\'s demand, the invoices history... ',
        tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Jsx - React - Axios - Git - Github ',
        imagesUrl: [require('../Assets/img/Medicy/Capture d’écran (217).png'), require('../Assets/img/Medicy/Capture d’écran (218).png'), require('../Assets/img/Medicy/Capture d’écran (219).png'), require('../Assets/img/Medicy/Capture d’écran (220).png'), require('../Assets/img/Medicy/Capture d’écran (221).png'), require('../Assets/img/Medicy/Capture d’écran (223).png'), require('../Assets/img/Medicy/Capture d’écran (224).png'), require('../Assets/img/Medicy/Capture d’écran (226).png'), require('../Assets/img/Medicy/Capture d’écran (228).png'), require('../Assets/img/Medicy/Capture d’écran (229).png'), require('../Assets/img/Medicy/Capture d’écran (230).png'), require('../Assets/img/Medicy/Capture d’écran (231).png'), require('../Assets/img/Medicy/Capture d’écran (232).png'), require('../Assets/img/Medicy/Capture d’écran (233).png'), require('../Assets/img/Medicy/Capture d’écran (234).png'), require('../Assets/img/Medicy/Capture d’écran (235).png')],
        githubLink: 'https://github.com/YounessSerrakhi/medicyFront',
        externalLink: 'https://younessserrakhi.github.io/medicyFront',
    },
    {
        title: 'Web Applications to manage a conferences of Fst Marrakech',
        description: 'This project is a web application to manage conferences of Fstg Marrakech, it allows the user to manage the conferences, the speakers, the participants, the sessions, the papers, the reviews...\n it can easly change from conference to another. ',
        tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Javascript - React - Axios - Git - Github ',
        imagesUrl: [require('../Assets/img/FstgConference/Capture d’écran (236).png'), require('../Assets/img/FstgConference/Capture d’écran (237).png'), require('../Assets/img/FstgConference/Capture d’écran (238).png'), require('../Assets/img/FstgConference/Capture d’écran (239).png'), require('../Assets/img/FstgConference/Capture d’écran (240).png'), require('../Assets/img/FstgConference/Capture d’écran (241).png'), require('../Assets/img/FstgConference/Capture d’écran (242).png'), require('../Assets/img/FstgConference/Capture d’écran (243).png'), require('../Assets/img/FstgConference/Capture d’écran (244).png'), require('../Assets/img/FstgConference/Capture d’écran (245).png'), require('../Assets/img/FstgConference/Capture d’écran (246).png'), require('../Assets/img/FstgConference/Capture d’écran (247).png'), require('../Assets/img/FstgConference/Capture d’écran (248).png'), require('../Assets/img/FstgConference/Capture d’écran (249).png'), require('../Assets/img/FstgConference/Capture d’écran (250).png'), require('../Assets/img/FstgConference/Capture d’écran (251).png'), require('../Assets/img/FstgConference/Capture d’écran (252).png'), require('../Assets/img/FstgConference/Capture d’écran (253).png')],
        githubLink: 'https://github.com/YounessSerrakhi/conferenceClient',
        externalLink: 'https://younessserrakhi.github.io/conferenceClient',
    },
];


  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                {/* <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                        <li className="mx-3 active" data-filter="*">All Projects</li>
                        <li className="mx-3" data-filter=".first">UI/UX Design</li>
                        <li className="mx-3" data-filter=".second">Graphic Design</li>
                    </ul>
                </div> */}
            </div>
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
            {projectsData.map((project, index) => (
                <div key={index} className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={project.imagesUrl[0]} alt="" />
                        <div className="portfolio-btn">
                            <button className="btn btn-lg-square btn-outline-secondary border-2 mx-1" onClick={() => openModal(index)}>
                                <i className="fa fa-eye"></i>
                            </button>
                            {project.githubLink && (
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.githubLink} target="_blank">
                                    <i className="fa fa-github"></i>
                                </a>
                            )}
                            {project.externalLink && ( 
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.externalLink} target="_blank">
                                <i className="fa fa-link"></i>
                            </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            </div>


            {showModal && (
                <ImageModal
                    images={projectsData[currentImageIndex].imagesUrl}
                    title={projectsData[currentImageIndex].title}
                    description={projectsData[currentImageIndex].description}
                    tools={projectsData[currentImageIndex].tools}
                    onClose={closeModal}
                />
            )}

        </div>
    </div>
  );
}
