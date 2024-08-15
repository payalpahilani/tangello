import React, { useState } from 'react';
import './FAQ.css';

function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="faq-header">
        <h2>FAQs</h2>
        <p className="faq-description">Explore frequently asked questions about Tangello, your go-to platform for connecting with wellness resources and community support.</p>
        </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
          <h3> What is Tangello and how can it help me? </h3>
          <i className={openFAQ === 0 ? "fas fa-times" : "fas fa-plus"}></i>
        </div>
        {openFAQ === 0 && <p>Tangello is a dynamic platform designed to enhance your well-being by connecting you with a range of mental health resources and peer support communities. It's here to guide you through your wellness journey, offering tools and activities that cater to your mental, emotional, and social health needs.</p>}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <h3>Is Tangello a replacement for professional therapy</h3>
          <i className={openFAQ === 1 ? "fas fa-times" : "fas fa-plus"}></i>
        </div>
        {openFAQ === 1 && <p>While Tangello offers support and resources to improve your well-being, it is not a substitute for professional therapy. We encourage using Tangello as a complement to professional healthcare, especially for personalized and specialized care.</p>}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <h3>How do I get started with Tangello?</h3>
          <i className={openFAQ === 2 ? "fas fa-times" : "fas fa-plus"}></i>
        </div>
        {openFAQ === 2 && <p>Getting started is easy! Simply sign up on our platform, complete your profile, and begin exploring the various resources and activities available. Whether you're interested in joining support groups or participating in wellness workshops, Tangello is here to support your journey.</p>}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          <h3>What should I do if I need urgent mental health support through Tangello?</h3>
          <i className={openFAQ === 3 ? "fas fa-times" : "fas fa-plus"}></i>
        </div>
        {openFAQ === 3 && <p>Tangello is not a crisis intervention tool. If you are in immediate need of help, please contact local emergency services or a mental health crisis hotline. Tangello is here to support your ongoing mental health journey but is not equipped to handle emergencies.</p>}
      </div>
    </section>
  );
}

export default FAQs;
