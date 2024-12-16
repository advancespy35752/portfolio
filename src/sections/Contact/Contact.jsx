import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';

function Contact() {
  // Initialize Formspree hook
  const [state, handleSubmit] = useForm("mjkvqyeb"); // replace with your form ID
  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        
        <input
          className={`${styles.btn} hover`}
          type="submit"
          value="Submit"
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
