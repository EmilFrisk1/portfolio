import React from 'react'

export default function About() {
    return (
        <div id="about" className='about-section container'>
            <span className="section-separator"></span>
            <h1 className="section-header">About</h1>
            <div className="profile-container">
                <img src="/images/profile_pic.jpg" alt="Profile picture" className="profile-pic" />
                <p className="profile-description">I am Emil Frisk from Finland. I am fast learner who likes challenge and cares about the quality of their work.</p>
            </div>
        </div>
    )
}
