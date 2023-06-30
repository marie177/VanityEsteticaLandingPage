import React from 'react'

const ContactForm = () => {
    return (
        <div className='contact-form-container'>
            <form className='contact-form'>
                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Nombre</label>
                        <input type='text' className='input-form'></input>
                    </div>

                    <div className='column'>
                        <label className='label-form'>Apellido</label>
                        <input type='text' className='input-form'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Telefono</label>
                        <input type='text' className='input-form'></input>
                    </div>

                    <div className='column'>
                        <label className='label-form'>Email</label>
                        <input type='email' className='input-form'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Consulta</label>
                        <input type='text' className='input-form h-100px'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <button className='btn-submit-form'>ENVIAR CONSULTA
                        <span className='contact-btn-submit-icon'></span></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm