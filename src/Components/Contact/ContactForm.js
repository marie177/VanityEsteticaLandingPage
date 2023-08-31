import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m0zssnh', 'template_e2i82fa', form.current, 'OllQgh0IDBjivMG8v')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className='contact-form-container'>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Nombre</label>
                        <input type='text' className='input-form' name="user_name"/>
                    </div>
                    <div className='column'>
                        <label className='label-form'>Apellido</label>
                        <input type='text' className='input-form' name="user_lastname"/>
                    </div>
                </div>

                <div className='row'>
                <div className='column'>
                        <label className='label-form'>Telefono</label>
                        <input type='text' className='input-form' name="user_telephone"/>
                    </div>
                    <div className='column'>
                        <label className='label-form'>Email</label>
                        <input type='email' className='input-form' name="user_email"/>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Consulta</label>
                        <textarea name="message" className='input-form h-100px' placeholder="Quiero recibir más información sobre el tratamiento..."/>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <button className='btn-submit-form' type='submit'>ENVIAR CONSULTA
                        <span className='contact-btn-submit-icon'></span></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm