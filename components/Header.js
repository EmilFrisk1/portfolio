import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <header className='main-header'>
            <div className="container">
                <div className="brand-name-and-logo">
                    <h1 className="brand-name">Emil Frisk</h1>
                    <img src="/paper.svg" alt="Brand Logo" className="brand-logo filter-white" />
                </div>
                <div className="section-links">
                    <motion.div
                        animate={{y: ["-200%", "0%", "-30%", "0%"]}}
                        transition={{ duration: 1.0 }}
                    >
                        <a className='section-link' href="#projects">Projects</a>
                        <a className='section-link' href="#technologies">Technologies</a>
                        <a className='section-link' href="#about">About</a>
                    </motion.div>
                </div>
                <div className="socials">
                    <a href="https://github.com/Anemoi4" target="_blank" rel="noreferrer">
                        <img  src="/images/GitHub-Logo.png" alt="Github Logo" className='social-logo'/>
                    </a>
                </div>
            </div>
        </header>
    )
}
