import { useState } from 'react';
import styles from './About.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí puedes añadir integración con email o formulario real
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Thanks for reaching out! I will get back to you soon.</p>;
  }

  return (
    <section className={styles.section}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>
          Name:<br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <label>
          Email:<br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <label>
          Message:<br />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="5" 
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
