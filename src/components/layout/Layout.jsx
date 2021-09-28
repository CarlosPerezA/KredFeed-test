import React from 'react';
import '../../styles/layout/Layout.scss'
import kredFeedLogo from '../../assets/static/logo-black.png';

const Layout = () => {
    return (
        <div className="wrapp">
            <section className="FormContainer">

            </section>
            <section className="BackgroundContainer">
                <div className="colorMask" />
                <div className="text">
                    <div className="text--title">
                        <h1>For growing your bussines</h1>
                    </div>
                    <img src={kredFeedLogo} width={220} height={40} alt="KredFeed Logo" />
                </div>
            </section>
        </div>
    )
}

export default Layout;
