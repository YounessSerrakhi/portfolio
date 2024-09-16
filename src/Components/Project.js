import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import '../Assets/css/style.css';

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
        title: 'AWS Full Infrastructure Deployment',
        description: 'This project focuses on designing and deploying a full infrastructure on AWS Cloud. It encompasses EC2 instances, ECS (Elastic Container Service), S3 for web hosting, CloudFront for content delivery, and Application Load Balancer (ALB) for managing traffic. The infrastructure also includes IAM roles for security management, RDS for database services, Auto Scaling for high availability, and Route53 for DNS management. Comprehensive monitoring was set up using CloudWatch. The project highlights CI/CD automation with GitHub Actions, allowing for seamless application deployment and version control.',
        tools: 'AWS - VPC - EC2 - ECS - S3 - CloudFront - ALB - RDS - ACM - CloudWatch - Route53 - Git - GitHub - Docker - CI/CD (GitHub Actions)',
        imagesUrl: [require('../Assets/img/awsInfra/VPCarch.png'), require('../Assets/img/awsInfra/appci-cd.png'), require('../Assets/img/awsInfra/webci-cd.png')],
        externalLink: '',
    },   
    {
        title: 'Web Application to Manage Colocation - Colocky.ma',
        description: 'Colocky.ma is a web application built using Spring Boot and React, designed to manage colocation (shared housing). Users can create, search, and manage colocation offers and requests. The project emphasizes the deployment process, which was done on a VPS using Nginx for reverse proxy and SSL termination. The CI/CD pipeline was configured using GitHub Actions for automating the build, testing, and deployment process. Backup management and database replication strategies were implemented to ensure data availability and integrity.',
        tools: 'Spring Boot - React - MySql - GitHub Actions - Nginx - VPS - CI/CD - Docker - Bash Scripting - Git - GitHub',
        imagesUrl: [require('../Assets/img/Colocky/Capture1.png'), require('../Assets/img/Colocky/Capture2.png')],
        githubLink: 'https://github.com/colocky-ma',
        externalLink: 'https://colocky.ma/',
    },
    {
        title: 'Web Applications to manage a pharmacy',
        description: 'This project is a web application to manage a pharmacy, it allows the user to manage the pharmacy\'s stock, the orders, the sales, the customers, the suppliers, the client\'s demand, the invoices history... ',
        tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Jsx - React - Axios - Git - Github ',
        imagesUrl: [require('../Assets/img/Medicy/Capture d’écran (217).png'), require('../Assets/img/Medicy/Capture d’écran (218).png')],
        githubLink: 'https://github.com/YounessSerrakhi/medicyFront',
        externalLink: 'https://younessserrakhi.github.io/medicyFront',
    },
    {
        title: 'Web Applications to manage conferences in Fst Marrakech',
        description: 'This project is a web application to manage conferences of Fstg Marrakech, it allows the user to manage the conferences, the speakers, the participants, the sessions, the papers, the reviews...',
        tools: 'Laravel - PHP - MySQL - ORM - HTML - CSS - Bootstrap - Javascript - React - Axios - Git - Github ',
        imagesUrl: [require('../Assets/img/FstgConference/Capture d’écran (236).png')],
        githubLink: 'https://github.com/YounessSerrakhi/conferenceClient',
        externalLink: 'https://younessserrakhi.github.io/conferenceClient',
    },
    {
        title: 'Web-CHATBOT Applications to ask your pdf',
        description: 'This chatbot project, driven by GPT-3.5, excels in natural language processing within the context of uploaded PDFs. It supports multilingual conversations, integrates with web technologies, and delivers context-aware responses. Voice interaction is included for enhanced user experience.',
        tools: 'Next.js - TypeScript (TSX) - GPT-3.5 API - Pinecon - Langchain - Axios - HTML & CSS - Git - GitHub',
        imagesUrl: [require('../Assets/img/chatbot/Capture d’écran (254).png')],
        githubLink: 'https://github.com/YounessSerrakhi/irisi-chatbot',
    },
    {
        title: 'AR Android Application',
        description: 'ARDeco is a mobile application utilizing augmented reality (AR) to showcase Moroccan traditional products in 3D. The app allows users to visualize the products in their real environment to simplify traditional decoration processes.',
        tools: 'Java - Android - Android Studio - ARCore - openGl - Blender - FireBase - Git - GitHub',
        imagesUrl: [require('../Assets/img/ArDeco/ardeco.png')],
        githubLink: 'https://github.com/YounessSerrakhi/ArDeco',
    },
];

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
  {projectsData.map((project, index) => (
    <div key={index} className="col-lg-4 col-md-6 portfolio-item first">
      <div className="portfolio-img rounded overflow-hidden position-relative" style={{ height: '300px' }}>
        <img 
          className="img-fluid" 
          src={project.imagesUrl[0]} 
          alt="" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="portfolio-info">
          <h5>{project.title}</h5>
        </div>
        <div className="portfolio-btn d-flex justify-content-center align-items-center">
          <button className="btn btn-lg-square btn-outline-secondary border-2 mx-1" onClick={() => openModal(project, 0)}>
            <i className="fa fa-eye"></i>
          </button>
          {project.githubLink && (
            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          )}
          {project.externalLink && (
            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.externalLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-link"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


        {showModal && selectedProject && (
          <ImageModal
            images={selectedProject.imagesUrl}
            title={selectedProject.title}
            description={selectedProject.description}
            tools={selectedProject.tools}
            onClose={closeModal}
            initialIndex={currentImageIndex}
          />
        )}
      </div>
    </div>
  );
}