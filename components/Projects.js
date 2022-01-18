import React from 'react'


export default function Projects() {
    return (
        <div id="projects" className='project-section container'>
            <span className="section-separator"></span>
            <h1 className="section-header">Projects</h1>
            <div className="project-row">
                <div className="project-card">
                    <img src="/images/Youtube-homepage-clone.JPG" alt="Project image" className="project-image" />
                    <h3 className="project-title">Homepage</h3>
                    <span className="section-separator center"></span>
                    <p className="project-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quis vitae voluptate corrupti quidem autem repellat, explicabo magni molestias cum.
                    </p>
                    <p className="project-technologies">
                        <div className="technologies">css</div>
                        <div className="technologies">node</div>
                    </p>
                </div>
            </div>
            <div className="project-row">
                <div className="project-card">
                    <img src="/images/E-commerce.JPG" alt="Project image" className="project-image" />
                    <h3 className="project-title">E-Commerce</h3>
                    <span className="section-separator center"></span>
                    <p className="project-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quis delectus rerum odit aliquid ipsum! Provident voluptas et nostrum nulla?
                    </p>
                    <p className="project-technologies">
                        <div className="technologies-row">
                                <div className="technologies">mongo</div>
                                <div className="technologies">express</div>
                        </div>
                        <div className="technologies-row">
                            <div className="technologies">React</div>
                            <div className="technologies">node</div>
                        </div>
                    </p>
                </div>
                <div className="project-card">
                    <img src="/images/Gamin-forum-app.JPG" alt="Project image" className="project-image" />
                    <h3 className="project-title">Gaming Forum</h3>
                    <span className="section-separator center"></span>
                    <p className="project-description">
                        Lore ipsum dolor sit, amet consectetur adipisicing elit. Officia exercitationem sit molestias sequi officiis. Animi fugiat minima eum atque in.
                    </p>
                    <p className="project-technologies">
                        <div className="technologies-row">
                                <div className="technologies">mongo</div>
                                <div className="technologies">express</div>
                            </div>
                        <div className="technologies-row">
                            <div className="technologies">React</div>
                            <div className="technologies">node</div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
