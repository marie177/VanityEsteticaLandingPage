import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsItem from './TreatmentsItem';

const Treatments = () => {
    return (
        <div className='treatments-container' id='treatmentsList'>
            <div className='treatments-banner'>
                <h2 className='treatments-title'>TRATAMIENTOS</h2>
                <p className='treatments-description'>Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros.</p>
            </div>
            <TreatmentsItem treatmentCategory="Corporales" description="Brindamos una diversa selección de tratamientos corporales diseñados con para realzar tu figura y mejorar el bienestar de tu cuerpo. descubrí una versión más radiante de vos misma."/>
            <TreatmentsItem treatmentCategory="Faciales" description="Proporcionamos tratamientos y cuidados para tu piel  que te permitirán alcanzar un cutis radiante y saludable. Para que sientas esa frescura y seguridad que solo una piel bien cuidada puede brindarte."/>
            <TreatmentsItem treatmentCategory="Cosmetológicos" description="Contamos de aparatología Facial para tratamientos antiage, diseñados para rejuvenecer tu piel y reducir los signos del envejecimiento."/>
            <TreatmentsItem treatmentCategory="Belleza_de_ojos" description="Realza la belleza de tus ojos con nuestros servicios especializados. Lográ una mirada más abierta, cejas definidas,  enmarca tus ojos de manera impecable."/>
            <TreatmentsItem treatmentCategory="Belleza_de_manos_pies" description="Contamos con servicio de esmaltado semipermanente, esmaltado tradicional, kapping gel y kapping acrílico, además de esculpidas en soft gel."/>
            <TreatmentsItem treatmentCategory="Masajes" description="Relaja y libera la tensión con nuestros masajes. Utilizamos diversas  técnicas proporcionándote una sensación de bienestar profundo y renovado."/>
            <TreatmentsItem treatmentCategory="Nutrición" description="Ofrecemos un servicio de nutrición personalizado, donde evaluamos tu historial médico y hábitos alimentarios para diseñar un plan de alimentación a tu medida."/>
            <TreatmentsItem treatmentCategory="Depilación_definitiva" description="La depilación definitiva es un tratamiento que elimina el vello de manera permanente. Esto resulta en una piel suave y sin vello a largo plazo."/>
        </div>
    )
}

export default Treatments