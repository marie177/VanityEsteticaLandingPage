import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import TratamientosCorporales from '../../json/tratamientoscorporales.json'
import TratamientosFaciales from '../../json/tratamientosfaciales.json'
import TratamientosCosmetologicos from '../../json/tratamientoscosmetologicos.json'
import TratamientosBellezaDeOjos from '../../json/tratamientosbellezadeojos.json'
import TratamientosMasajes from '../../json/tratamientosmasajes.json'
import TratamientosBellezaManosPies from '../../json/tratamientosbellezamanosypies.json'
import TratamientosNutricion from '../../json/tratamientosnutricion.json'
import TratamientosDepilacionDefinitiva from '../../json/tratamientosdepilaciondefinitiva'

const ContactForm = () => {
    const form = useRef();
    const [validations, setValidations] = useState({
        "user_name": null,
        "message": null
    })

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateFields()) {
            console.log('form invalido')
        }
        else {
            emailjs.sendForm('service_m0zssnh', 'template_e2i82fa', form.current, 'OllQgh0IDBjivMG8v')
                .then((result) => {
                    form.current.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }
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
            case "Belleza_de_manos_pies":
                tratamientosArray = TratamientosBellezaManosPies;
                break;
            case "Masajes":
                tratamientosArray = TratamientosMasajes;
                break;
            case "Nutricion":
                tratamientosArray = TratamientosNutricion;
                break;
            case "Depilaciondefinitiva":
                tratamientosArray = TratamientosDepilacionDefinitiva;
                break;
            default:
                break;
        }

        setTratamientos(tratamientosArray);
    }

    const validateFields = () => {
        let arrayElements = Array.from(form.current.elements).filter(element => {
            if (!(element.nodeName.toUpperCase() === "BUTTON") && !(element.nodeName.toUpperCase() === "SELECT")) {
                return element
            }
        });
        let arrayValidations = {};
        let validateForm = true;

        arrayElements.forEach((input) => {
            if (!form.current[input.name].value || form.current[input.name].value
                .trim("") === '') {
                arrayValidations[input.name] = "El campo debe contener al menos 2 carácteres"
                if (validateForm) validateForm = false;
            }
            setValidations(arrayValidations)
        })

        return validateForm;
    }

    return (
        <div className='contact-form-container'>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Nombre</label>
                        <input required type='text' className='input-form' name="user_name" />
                        {
                            validations["user_name"] ? <p className='validation'>{validations["user_name"]}</p> : null
                        }
                    </div>
                    <div className='column'>
                        <label className='label-form'>Apellido</label>
                        <input required type='text' className='input-form' name="user_lastname" />
                        {
                            validations["user_lastname"] ? <p className='validation'>{validations["user_lastname"]}</p> : null
                        }
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <label className='label-form'>Telefono</label>
                        <input required type='text' className='input-form' name="user_telephone" />
                        {
                            validations["user_telephone"] ? <p className='validation'>{validations["user_telephone"]}</p> : null
                        }
                    </div>
                    <div className='column'>
                        <label className='label-form'>Email</label>
                        <input required type='email' className='input-form' name="user_email" />
                        {
                            validations["user_email"] ? <p className='validation'>{validations["user_email"]}</p> : null
                        }
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
                            <option value="Belleza_de_manos_pies">Belleza de Manos y Pies</option>
                            <option value="Masajes">Masajes</option>
                            <option value="Nutricion">Nutrición</option>
                            <option value="Depilaciondefinitiva">Depilación definitiva</option>
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
                        <textarea required name="message" className='input-form h-100px' placeholder="Quiero recibir más información sobre el tratamiento..." />

                        {
                            validations["message"] ? <p className='validation'>{validations["message"]}</p> : null
                        }
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