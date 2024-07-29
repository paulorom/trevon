import { useState } from 'react'
import styles from './Newsletter.module.css';


export default function Newsletter() {

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Obrigado por se inscrever em nossa Newsletter");
        setEmail('')
      })
      .catch((error) => alert(error));
  };

  const handleChange = (event) => {
    setEmail(event.value)
  }

  return (
    <form
      data-netlify="true"
      name="newsletter"
      method="post"
      onSubmit={handleSubmit}>
      <input type="hidden" 
        name="form-name" value="newsletter" />

      <div className='flex w-[100%] text-center text-lg font-medium'>
        <h3 className='w-[100%]'>Receba nosso conteúdo em seu Email</h3>
      </div>
    
      <div className='mx-auto flex md:w-[320px]'>

        <input value={email} 
          className={styles.newsletterEmails} 
          type="email" id="email" name="email" 
          placeholder='Seu Email ...'
          onChange={handleChange} required />

        <input style={{color:'white', background:'#3962a3', marginLeft: '8px', padding: '0 8px'}} 
          type="submit" />

      </div>
      
    </form>
  )
}