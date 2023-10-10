import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TratamientosCorporales from '../../json/tratamientoscorporales.json'
import TratamientosFaciales from '../../json/tratamientosfaciales.json'
import TratamientosCosmetologicos from '../../json/tratamientoscosmetologicos.json'
import TratamientosBellezaDeOjos from '../../json/tratamientosbellezadeojos.json'
import TratamientosMasajes from '../../json/tratamientosmasajes.json'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m0zssnh', 'template_e2i82fa', form.current, 'OllQgh0IDBjivMG8v')
            .then((result) => {
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const [tratamientosArray, setTratamientos] = useState(TratamientosCorporales);

    const changeTratamientosArray = (tipoTratamiento) => {

        let tratamientosArray = [];

        switch (tipoTratamiento) {
            case "Corporales":
                tratamientosArray = TratamientosCorporales;
                break;
            case "Faciales":
                tratamientosArray = TratamientosFaciales;
                break;
            case "Cosmetologicos" || "Cosmetológicos":
                tratamientosArray = TratamientosCosmetologicos;
                break;
            case "Belleza_de_ojos":
                tratamientosArray = TratamientosBellezaDeOjos;
                break;
            case "Masajes":
                tratamientosArray = TratamientosMasajes;
                break;
            default:
                break;
        }

        setTratamientos(tratamientosArray);
    }

    return (
        <div className='contact-form-container'>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Nombre</label>
                        <input type='text' className='input-form' name="user_name" />
                    </div>
                    <div className='column'>
                        <label className='label-form'>Apellido</label>
                        <input type='text' className='input-form' name="user_lastname" />
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Telefono</label>
                        <input type='text' className='input-form' name="user_telephone" />
                    </div>
                    <div className='column'>
                        <label className='label-form'>Email</label>
                        <input type='email' className='input-form' name="user_email" />
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Tipo de Tratamiento</label>
                        <select name="selectTipoTratamientos" className='input-form select' onChange={e => changeTratamientosArray(e.target.value)}>
                            <option value="Corporales">Tratamientos Corporales</option>
                            <option value="Faciales">Tratamientos Faciales</option>
                            <option value="Cosmetologicos">Tratamientos Cosmetológicos</option>
                            <option value="Belleza_de_ojos">Belleza de Ojos</option>
                            <option value="Masajes">Masajes</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Tratamiento</label>
                        <select name="select_treatment_name" className='input-form select'>
                            {
                                tratamientosArray.map((tratamiento, index) => {
                                    return (
                                        <option value={tratamiento.title} key={index}>{tratamiento.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Consulta</label>
                        <textarea name="message" className='input-form h-100px' placeholder="Quiero recibir más información sobre el tratamiento..." />
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