import React from 'react';
import { useHistory } from "react-router-dom";
import '../../styles/progressIndicator/ProgressIndicator.scss';
import arrowGray from '../../assets/static/arrrow-gray.png';

const progressIndicator = ({ step1, step2, step3, step4 }) => {
    const history = useHistory();
    return (
        <div className='progress--container'>
            <div className={step2 ? 'progress--container__text_next' :'progress--container__text'}>
                <div className='text back'>
                    <img src={arrowGray} width={10} height={15} alt="Flecha para regresar de pagina" />
                    <button onClick={() => { history.goBack(); }}>Regresar</button>
                </div>
                <div className='text'>
                    <h2 className='title'>Registro</h2>
                </div>
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
