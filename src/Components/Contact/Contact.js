import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <h2 className='contact-title'>CONTACTO</h2>

            <div className='contact-body'>

                <div className='contact-data'>
                    <div className='contact-data-item'>
                        <span className='contact-data-icon i-map'></span>
                        <a>Buenos Aires, Tigre</a>
                    </div>

                    {/* <div className='contact-data-item'>
                        <span className='contact-data-icon i-phone'></span>
                        <a href="https://wa.me/+5491167917230" target="_blank">+54 9 11 6791 7230</a>
                    </div> */}

                    <div className='contact-data-item'>
                        <span className='contact-data-icon i-whatsapp'></span>
                        <a href="https://wa.me/+5491167917230"  target="_blank">+54 9 11 6791 7230</a>
                    </div>

                    <div className='contact-data-item'>
                        <span className='contact-data-icon i-instagram'></span>
                        <a href='https://www.instagram.com/vanity.estetica_ok/'  target="_blank">vanity.beautycenter_ok</a>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    )
}

export default Contact