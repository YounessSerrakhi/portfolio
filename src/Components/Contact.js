import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const ref = useRef(null);
  const [display, setDisplay] = useState('hidden');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const top = ref.current.offsetTop;
      if (scrollY >= top - 400 && scrollY <= top) {
        setDisplay('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const originLine = "Origin: Serrakhi's Portfolio";
  const emailBody = `${formData.message}\n${originLine}`;

  const emailLink = `mailto:serrakhiyouness@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(emailBody)}%0A%0AFrom:%20${encodeURIComponent(
    formData.name
  )}%0AEmail:%20${encodeURIComponent(formData.email)}`;

    window.open(emailLink, '_blank');
  };

  return (
    <div ref={ref} className="container-xxl pb-5" id="contact">
      <div className="container py-5">
        <div className={`row g-5 mb-5 ${display}`}>
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">Let's get in touch!</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p className="btn btn-primar100 y py-3 px-5">
              Say Hello
            </p>
          </div>
        </div>
        <div className="row g-5">
          <div
            className={`col-lg-5 col-md-6 ${display}`}
            style={{ transitionDelay: '0.5s, 0.5s' }}
          >
            <p className="mb-2">My Faculty:</p>
            <h3 className="fw-bold">FSTg MARRAKECH,</h3>
            <h5>Cadi Ayyad University</h5>
            <hr className="w-100" />
            <p className="mb-2">Call me:</p>
            <h3 className="fw-bold">+212 645169744</h3>
            <hr className="w-100" />
            <p className="mb-2">Mail me:</p>
            <h3 className="fw-bold">serrakhiyouness@gmail.com</h3>
            <hr className="w-100" />
            <p className="mb-2">Follow me:</p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-primary me-2"
                href="https://www.linkedin.com/in/youness-serrakhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="btn btn-square btn-primary me-2"
                href="https://www.instagram.com/younesserrakhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="btn btn-square btn-primary me-2"
                href="https://github.com/YounessSerrakhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div
            className={`col-lg-7 col-md-6 ${display}`}
            style={{ transitionDelay: '0.7s, 0.7s' }}
          >
            <p className="mb-4">
              The contact form will redirect you to your default email client.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: '100px' }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
