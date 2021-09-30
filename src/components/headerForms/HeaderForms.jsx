import React from 'react';
import '../../styles/headerForm/HeaderForm.scss'
import kredFeedLogo from '../../assets/static/logo-black.png';

const HeaderForms = () => {
    return (
        <div className='header--Form'>
            <img src={kredFeedLogo} width={196} height={30} alt='KredFeed logo negro' />
            <div className='header--Form__text'>
                <p>¿Ya tienes cuenta? <a href="">Inicia sesión</a></p>
            </div>
        </div>
    )
}

export default HeaderForms;
