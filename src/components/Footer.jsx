import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-name">
                Developed & maintained by <Link className='developer' to="https://x.com/mohitbhatia612">Mohit Bhatia</Link>.
            </p>
            <p className="footer-tagline">
                Engineering clarity from complexity.
            </p>
        </footer>
    )
}

export default Footer
