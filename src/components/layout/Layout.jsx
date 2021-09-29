import React from 'react';
import '../../styles/layout/Layout.scss'
import kredFeedLogo from '../../assets/static/logo-white.png';


const Layout = ({ children }) => {
    return (
        <div className='wrapp'>
            <section className='FormContainer'>
            {children}
            </section>
            <section className='BackgroundContainer'>
                <div className='textContainer'>
                    <div className='text--title'>
                        <h1 className='title'>For growing your bussines</h1>
                    </div>
                    <img src={kredFeedLogo} width={312} height={47} alt='KredFeed Logo' />
                </div>
                <div className='colorMask' />
            </section>
        </div>
    )
}

export default Layout;
