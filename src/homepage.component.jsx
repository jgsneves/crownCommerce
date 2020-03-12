import React from 'react';
import './homepage.style.scss';

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>GORROS</h1>
                        <span className='subtitle'>compre agora</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>JAQUETAS</h1>
                        <span className='subtitle'>compre agora</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SAPATOS</h1>
                        <span className='subtitle'>compre agora</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MULHERES</h1>
                        <span className='subtitle'>compre agora</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HOMENS</h1>
                        <span className='subtitle'>compre agora</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;