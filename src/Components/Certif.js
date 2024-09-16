import React, { useRef , useEffect, useState} from 'react'


export default function Certif() {

    const Ref = useRef(null);
    const [display,setDisplay]=useState('hiden');

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const Top = Ref.current.offsetTop;
        if (scrollY >= Top - 400 && scrollY <= Top) {
            setDisplay('show');  
          }
        }

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const certificationData = [
        {
          title: 'Utilisez Spring Data pour interagir avec vos bases de données',
          skils:'Spring boot -  Spring Data - Spring Data Jpa - JDBC - three-tier architecture - Entities - Repository Interface pattern - Transactions',
          imageUrl: require('../Assets/certif/open spring data jpa.png'),
          externalLink: 'https://openclassrooms.com/fr/course-certificates/7026173041',
        },
          {
            title: 'Create Web Applications Efficiently With the Spring Boot MVC Framework',
            skils:'Spring boot - Thymeleaf template - field valiation - cross-field & cross-record validations - three-tier architecture - spring beans - logs - Spring Actuator',
            imageUrl: require('../Assets/certif/open spring boot 2-1.png'),
            externalLink: 'https://openclassrooms.com/fr/course-certificates/5134697342',
          },
          {
            title: 'Créez une application Java avec Spring Boot',
            skils: 'spring boot - java - maven - dependency injection - spring web - spring mvc - @annotations',
            imageUrl: require('../Assets/certif/open springboot1-1.png'),
            externalLink: 'https://openclassrooms.com/fr/course-certificates/5499695396',
          },
          {
            title: 'Maven',
            skils: 'Maven - Java - JUnit - Javadoc - Jar - POM - Multi Module - Dependency - Plugin - lifecycle',
            imageUrl: require('../Assets/certif/maven-1.png'),
            externalLink: 'https://openclassrooms.com/fr/course-certificates/5499695396',
          },
          {
            title: 'Advanced React',
            skils: 'react advanced - react hooks - react context - reusable component - HOC - fetshing data (API) - react best practices - react performance - react clean architecture - react testing',
            imageUrl: require('../Assets/certif/Advanced react.jpg'),
            externalLink: 'https://coursera.org/share/e3ca36841a271b5d731a21e83ba91c79',
          },
          {
            title: 'React Basics',
            skils: 'react - VDOM - react basics - react components - react hooks - react forms - react validation',
            imageUrl: require('../Assets/certif/Coursera-react-basics-1.png'),
            externalLink: 'https://coursera.org/share/684215256a1de44306f24c398a003aab',
          },
          {
            title: 'Programming with JavaScript',
            skils: 'Javascript code - OOP - Creating & manipulating objects and arrays - DOM',
            imageUrl: require('../Assets/certif/Coursera (programming with js)-1.png'),
            externalLink: 'https://coursera.org/share/f7ed9f6fcded17429411e6f21c388365',
          },
          {
            title: 'HTML & CSS in depth',
            skils: 'learn more about HTML5 & CSS3',
            imageUrl: require('../Assets/certif/Coursera-html-css-1.png'),
            externalLink: 'https://coursera.org/share/a714ac9a702cc264c79d1b394fba566c',
          },
          {
            title: 'Introduction to front-end development',
            skils: 'learn more about front-end development and web design basics (HTML5, CSS3, Bootstrap, DOM, intro to SPA concept)',
            imageUrl: require('../Assets/certif/Coursera (intro front-end)-1.png'),
            externalLink: 'https://coursera.org/share/30078c36d058676c7ac7b7d542aba0f5',
          },
          {
            title: 'Git and Github',
            skils: 'git - github - version control - git bash - git flow - git commands - collaboration',
            imageUrl: require('../Assets/certif/GIT 1 GITHUB-1.png'),
            externalLink: 'https://coursera.org/share/41b0cebcf02df98fef5d4725a2ed2854',
          },
          {
            title: 'Native PHP app web basics',
            skils: 'PHP - MySQL - HTML - CSS - web design - web development - MVC',
            imageUrl: require('../Assets/certif/php openclassroom-1.png'),
            externalLink: '/',
          },
          {
            title: 'Python Data Structures',
            skils: 'Data Structures - python - algorithms',
            imageUrl: require('../Assets/certif/Coursera-python2.png'),
            externalLink: 'https://coursera.org/share/4f5ef2d43f336bd304d33b93f4339676',
          },
          {
            title: 'Python for Everybody',
            skils: 'python - algorithms ',
            imageUrl: require('../Assets/certif/Coursera-python1.png'),
            externalLink: 'https://coursera.org/share/a75f4bb2cc5296f8b2924807b535174f',
          },
        
      ];


  return (
    <div className="container-fluid bg-light my-5 py-6" id="certif">
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Certifications</h1>
          </div>
        </div>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div ref={Ref} className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
              {certificationData.map((certification, index) => (
                <div
                className="card shadow-sm"
                onClick={() => window.open(certification.externalLink, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="img-fluid bd-placeholder-img card-img-top"
                  style={{ height: '320px', objectFit: 'cover' }}
                  src={certification.imageUrl}
                  alt={`Certification ${index + 1}`}
                />
                <div className="card-body" style={{ height: '150px' }}>
                  <h5 className="card-title">{certification.title}</h5>
                  <p className="card-text">{certification.skils}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
