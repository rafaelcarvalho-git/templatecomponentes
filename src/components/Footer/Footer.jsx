import './Footer.css'
import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

function Footer() {
    return (
        <footer className="py-3">
            <div className="container d-flex flex-wrap">
                <div className="mx-auto align-self-center">
                    <a className="name" target="_blank" rel="noreferrer noopener" href="https://rafaelcarvalho-dev.web.app/"><BiCopyright /> {anoAtual} - Rafael Carvalho</a>
                </div>
                <div className="social mx-auto d-flex">
                    <a className="footer-icon bg-info" target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0"><BsWhatsapp /></a>
                    <a className="footer-icon bg-info" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/rafaelcarvalho.py/"><BsInstagram /></a>
                    <a className="footer-icon bg-info" target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git"><BsGithub /></a>
                    <a className="footer-icon bg-info" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/"><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;