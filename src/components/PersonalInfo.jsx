import React from 'react'
import { RiMenLine, RiCodeSSlashFill, RiMapPin2Line, RiMailLine, RiPhoneLine, RiLinkedinLine, RiGithubLine, RiTwitterXLine } from "@remixicon/react";

const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <div className="left">
                <ul>
                    <li>
                        <div className='icon-wrapper'>
                            <RiMenLine className="icons" />
                        </div>
                        <p>
                            He/Him
                        </p>
                    </li>
                    <li>
                        <div className='icon-wrapper'>
                            <RiCodeSSlashFill className="icons" />
                        </div>
                        <p>
                            Full-Stack Web Developer | Design Engineer
                        </p>
                    </li>

                    <li>
                        <div className='icon-wrapper'>
                            <RiMapPin2Line className="icons" />
                        </div>
                        <p>
                            Ottawa, Canada
                        </p>
                    </li>
                    <li>
                        <div className='icon-wrapper'>
                            <RiMailLine className="icons" />
                        </div>
                        <p>
                            <a href="mailto:mohitbhatia612@gmail.com">mohitbhatia612@gmail.com</a>
                        </p>
                    </li>
                    <li>
                        <div className='icon-wrapper'>
                            <RiPhoneLine className="icons" />
                        </div>
                        <p>
                            <a href="tel:+14378793446">+1 437-879-3446</a>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="link" role='button' tabIndex={0} data-url="https://linkedin.com/in/mohit-bhatia-777461289" onClick={(e) => window.open(e.currentTarget.dataset.url, "_blank")} onKeyDown={(e) => e.key === "Enter" && window.open(e.currentTarget.dataset.url, "_blank")}>
                <div className='icon-wrapper'>
                    <RiLinkedinLine className="icons" />
                </div>
                <p>
                    LinkedIn
                </p>
                <small>→</small>
            </div>
            <div className="link" role='button' tabIndex={0} data-url="https://github.com/Bhatia612" onClick={(e) => window.open(e.currentTarget.dataset.url, "_blank")} onKeyDown={(e) => e.key === "Enter" && window.open(e.currentTarget.dataset.url, "_blank")}>
                <div className='icon-wrapper'>
                    <RiGithubLine className="icons" />
                </div>
                <p>
                    Github
                </p>
                <small>→</small>
            </div>
            <div className="link" role='button' tabIndex={0} data-url="https://x.com/mohitbhatia612" onClick={(e) => window.open(e.currentTarget.dataset.url, "_blank")} onKeyDown={(e) => e.key === "Enter" && window.open(e.currentTarget.dataset.url, "_blank")}>
                <div className='icon-wrapper'>
                    <RiTwitterXLine className="icons" />
                </div>
                <p>
                    X
                </p>
                <small>→</small>
            </div>

        </div>
    )
}

export default PersonalInfo