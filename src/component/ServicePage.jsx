import React from 'react';

const ServicePage = () => {
  return (
    <section className="c-section py-8">
      <h2 className="c-section__title text-3xl font-bold text-center mb-6">
        <span>Our Services</span>
      </h2>
      <ul className="c-services max-w-4xl mx-auto space-y-6">
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">Responsive Web Design</h3>
          <p>
            We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.
          </p>
        </li>
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">UX Auditing</h3>
          <p>
            If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.
          </p>
        </li>
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">Front End Development</h3>
          <p>
            We are Front End masters with a deep focus on HTML, CSS. The result of our work is responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we’re happy to do so.
          </p>
        </li>
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">UX Consultation</h3>
          <p>
            If you don’t know what kind of service to request from us, don’t worry. We can help and see what fits your business and your budget.
          </p>
        </li>
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">Mobile Apps Design</h3>
          <p>
            To reach more customers and achieve the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to the final tested prototype.
          </p>
        </li>
        <li className="c-services__item">
          <h3 className="text-xl font-semibold">UX Research</h3>
          <p>
            It’s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis, and much more.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ServicePage;
