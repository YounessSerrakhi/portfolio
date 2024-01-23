import React, { useEffect, useState } from 'react'


export default function Navbar() {

    const [display,setDisplay]=useState('none'); 
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 500) {
            setDisplay('flex');
          } else {
            setDisplay('none');
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5" style={{display:`${display}`}}>
        <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="text-primary fw-bold m-0">ProMan</h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#skill" class="nav-item nav-link">Skills</a>
                <a href="#skill" class="nav-item nav-link">Educations</a>
            </div>
            <a href="#home" class="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                <h1 class="text-primary fw-bold m-0">SERRAKHI</h1>
            </a>
            <div class="navbar-nav me-auto py-0">
                <a href="#certif" class="nav-item nav-link">Certifications</a>
                <a href="#home" class="nav-item nav-link">Projects</a>
                <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
  )
}
