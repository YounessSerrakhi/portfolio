import React, { useRef , useEffect, useState} from 'react'

export default function Contact() {
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
  return (
    <div ref={Ref} class="container-xxl pb-5" id="contact">
        <div class="container py-5">
            <div class={`row g-5 mb-5 ${display}`}>
                <div class="col-lg-6">
                    <h1 class="display-5 mb-0">Let's Work Together</h1>
                </div>
                <div class="col-lg-6 text-lg-end">
                    <a class="btn btn-primar100 y py-3 px-5" href="">Say Hello</a>
                </div>
            </div>
            <div class="row g-5">
                <div class={`col-lg-5 col-md-6 ${display}` } style={{transitionDelay: '0.5s, 0.5s'}}>
                    <p class="mb-2">My Faculty:</p>
                    <h3 class="fw-bold">FSTg MARRAKECH,</h3>
                     <h5>Cadi Ayyad University</h5>
                    <hr class="w-100"/>
                    <p class="mb-2">Call me:</p>
                    <h3 class="fw-bold">+212 645169744</h3>
                    <hr class="w-100"/>
                    <p class="mb-2">Mail me:</p>
                    <h3 class="fw-bold">serrakhiyouness@gmail.com</h3>
                    <hr class="w-100"/>
                    <p class="mb-2">Follow me:</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-github"></i></a>
                        <a class="btn btn-square btn-primary me-2" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class={`col-lg-7 col-md-6 ${display}` } style={{transitionDelay: '0.7s, 0.7s'}}>
                    <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: '100px'}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
