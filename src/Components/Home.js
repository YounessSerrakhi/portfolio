import React, {useEffect, useState} from 'react'


export default function Home() {

    const targetText = [
        'Software engineer',
        'Full-stack Developer (React/Springboot)',
        'Full-stack Developer (React/Laravel)',
        'Apps Developer',
      ];
    
      const [currentText, setCurrentText] = useState('');
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isTyping, setIsTyping] = useState(true);
    
      useEffect(() => {
        const typingInterval = 50; //the typing speed (milliseconds)
    
        if (isTyping) {
          const textLength = targetText[currentIndex].length;
    
          setTimeout(() => {
            setCurrentText(targetText[currentIndex].substring(0, currentText.length + 1));
    
            if (currentText.length === textLength) {
              setIsTyping(false);
            }
          }, typingInterval);
        } else {
          setTimeout(() => {
            setCurrentText('');
            setCurrentIndex((currentIndex + 1) % targetText.length);
            setIsTyping(true);
          }, 1500); // Wait for 1.5 second before moving to the next field
        }
    
        return () => clearTimeout(typingInterval);
      }, [currentText, currentIndex, isTyping, targetText]);
    
  return (
    <div class="container-fluid bg-light my-6 mt-0" id="home">
        <div class="container">
            <div class="row g-5 align-items-center">
            <div class="col-lg-6 py-6 pb-0 pt-lg-0">
        <h3 class="text-primary mb-3">I'm</h3>
        <h1 class="display-3 mb-3">SERRAKHI Youness</h1>
        <h2 className="typed-text-output d-inline">
            <div style={{ minHeight:'2.3em'}}>
            <div className="typed-text" >{currentText}</div>
            </div>
        </h2>
        <div class="d-flex align-items-center pt-5">
            <a href="SERRAKHI_CV.pdf" class="btn btn-primary py-3 px-4 me-5" download>Download CV</a>
        </div>
    </div>

                <div class="col-lg-6">
                    <img class="img-fluid" src={require('../Assets/img/profile.png')} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
