import React, { useRef , useEffect, useState} from 'react'

export default function Skils() {
    const skilsRef = useRef(null);
    const [display,setDisplay]=useState('hiden');
    const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const skilsTop = skilsRef.current.offsetTop;
        const progressBars = document.querySelectorAll('.progress-bar');
        if (scrollY >= skilsTop - 400 && scrollY <= skilsTop) {
            setDisplay('show');
            progressBars.forEach((progressBar) => {
              const ariaValuenow = progressBar.getAttribute('aria-valuenow');
              progressBar.style.width = `${ariaValuenow}%`;
            });
          }
        }

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div class={`container-xxl py-6 pb-5`} id="skill"  ref={skilsRef}>
        <div class={`container `}>
            <div class="row g-5">
                <div class={`col-lg-6 ${display}`}>
                    <h1 class="display-5 mb-5">Skills & Experience</h1>
                    <p class="mb-4">I'm a passionate software engineering student based in Morocco. In my second year of studies at IRISI (FST Marrakech), I am focused on honing my skills in full-stack development and exploring various technologies.</p>
                    <h3 class="mb-4">My Skills</h3>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">HTML/CSS</h6>
                                    <h6 class="font-weight-bold">95%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">Javascript</h6>
                                    <h6 class="font-weight-bold">90%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">PHP/Laravel</h6>
                                    <h6 class="font-weight-bold">85%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">C</h6>
                                    <h6 class="font-weight-bold">80%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">React JS</h6>
                                    <h6 class="font-weight-bold">80%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-bold">Java/Springboot</h6>
                                    <h6 class="font-weight-bold">95%</h6>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={`col-lg-6 ${display}`} style={{transitionDelay: '0.5s, 0.5s'}}>
                    <ul class="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li class="nav-item w-50">
                            <button className={`nav-link w-100 py-3 fs-5 
                                    ${activeTab === 'experience' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('experience')}
                                    >Education</button>
                        </li>
                        <li class="nav-item w-50">
                            <button 
                            className={`nav-link w-100 py-3 fs-5 ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => handleTabChange('education')}
                            >extra-curricular</button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" className={`tab-pane fade show p-0 ${activeTab === 'experience' ? 'active' : ''}`}>
                            <div class="row gy-5 gx-4">
                                <div class="col-sm-6">
                                    <h5>Software Engineering Student </h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2022 - 2025(currently)</p>
                                    <h7 class="mb-0">IRISI (FST MARRAKECH)</h7>
                                </div>
                                <div class="col-sm-6">
                                    <h5>University degree in science and technology</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2020 - 2022</p>
                                    <h7 class="mb-0">DEUST MIPC (FST MARRAKECH)</h7>
                                </div>
                                <div class="col-sm-6">
                                    <h5>Baccalaureate</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2019 - 2020</p>
                                    <h7 class="mb-0">PC: Physics and Chemistry</h7>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className={`tab-pane fade show p-0 ${activeTab === 'education' ? 'active' : ''}`}>
                            <div class="row gy-5 gx-4">
                                <div class="col-sm-6">
                                    <h5>President</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2023 - 2024</p>
                                    <h6 class="mb-0">Club IRISI</h6>
                                </div>
                                <div class="col-sm-6">
                                    <h5>head of communications</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2023</p>
                                    <h6 class="mb-0">Integration CI FSTg</h6>
                                </div>
                                <div class="col-sm-6">
                                    <h5>vice president</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2022 - 2023</p>
                                    <h6 class="mb-0">Club IRISI</h6>
                                </div>
                                <div class="col-sm-6">
                                    <h5>TRAVESY project manager</h5>
                                    <hr class="text-primary my-2"/>
                                    <p class="text-primary mb-1">2021 - 2022</p>
                                    <h6 class="mb-0">Enactus FSTg</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
