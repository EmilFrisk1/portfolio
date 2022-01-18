import React from 'react'

export default function Technologies() {
    return (
        <div id="technologies" className='technologies-section container'>
            <span className="section-separator"></span>
            <h1 className="section-header">Technologies</h1>
            <div className="technologies-list">
                <p className="technologies-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iste!</p>
                <div className="technologies-row">
                    <div className="technology">
                        <div className="title-and-image">
                            <h1 className="technology-title">Front-End</h1>
                            <img src="/images/react-icon.svg" alt="cool image" className='technology-image filter-white'/>
                        </div>
                        <span className="section-separator center"></span>
                        <p className="technology-description">Experience with React and CSS</p>
                    </div>
                    <div className="technology">
                        <div className="title-and-image">
                            <h1 className="technology-title">Back-End</h1>
                            <img src="/images/cloud.svg" alt="cool image"  className='technology-image filter-white'/>
                        </div>
                        <span className="section-separator center"></span>                        
                        <p className="technology-description">Experience with node, mongo and webhooks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
