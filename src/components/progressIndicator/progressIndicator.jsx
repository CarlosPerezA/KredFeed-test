import React from 'react';
import '../../styles/progressIndicator/ProgressIndicator.scss';

const progressIndicator = ({ step1, step2, step3, step4 }) => {
    return (
        <div className='progress--container'>
            <div className='progress--container__text'>
                <h2 className='title'>Registro</h2>
            </div>
            <div className='progress--container__elements'>
            <div className={ step1 ? 'circle orange' : 'circle'}>
                <p>1</p>
            </div>
            <div className={ step2 ? 'separator orange' : 'separator'}/>
            <div className={ step2 ? 'circle orange' : 'circle'}>
                <p>2</p>
            </div>
            <div className={ step3 ? 'separator orange' : 'separator'}/>
            <div className={ step3 ? 'circle orange' : 'circle'}>
                <p>3</p>
            </div>
            <div className={ step4 ? 'separator orange' : 'separator'}/>
            <div className={ step4 ? 'circle orange' : 'circle'}>
                <p>4</p>
            </div>
            </div>
            <div className='progress--container__labels'>
                <div className='label'>
                    <p>Información general</p>
                </div>
                <div className='label'>
                    <p>Domicilio</p>
                </div>
                <div className='label'>
                    <p>Representante legal</p>
                </div>
                <div className='label'>
                    <p>Datos bancarios</p>
                </div>
            </div>
        </div>
    )
}

export default progressIndicator;
