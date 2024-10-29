import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <img src="img/features-1.svg" className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Complete Website Design & Development Solutions</h4>
            <p>
              Our team delivers creative and responsive web designs tailored to your brand's vision. We ensure seamless
              development with cutting-edge technologies, providing user-friendly and scalable platforms that grow with
              your business.
            </p>
            <p>
              From initial concept to final launch, we build websites that captivate your audience while driving
              results. Our holistic approach guarantees that every element of your site is optimized for performance,
              security, and scalability.
            </p>
          </div>
        </div>

        <div className="row feature-item mt-5 pt-5">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="img/features-2.svg" className="img-fluid" alt="Feature 2" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Reliable Hosting, Deployment, and Maintenance</h4>
            <p>
              We provide secure and fast hosting solutions that ensure your website is always online and running at peak
              performance. Our deployment process is streamlined, making sure that your website goes live without a
              hitch.
            </p>
            <p>
              Post-launch, we offer comprehensive maintenance services to keep your site updated, secure, and free of
              technical issues. Whether it's updates, troubleshooting, or performance monitoring, we’re here to support
              your website’s ongoing success.
            </p>
            <p>
              Trust us to manage your web presence while you focus on growing your business. We handle everything, from
              infrastructure to regular backups, ensuring peace of mind for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
