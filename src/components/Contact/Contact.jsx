import './Contact.css'
import { BsEnvelope, BsPhone, BsGeoAlt } from 'react-icons/bs'

function Contact() {
    return (
        <section id="contact">
            <div className="container py-4">
                <h2 className="text-center text-info fw-bold">CONTATO</h2>
                <div class="line"></div>
                <div className="row py-5 mt-5">
                    <a href="tel:+5588988573004" className="col-12 col-lg-4 mb-5 text-decoration-none">
                        <div className="contact-item-hover text-center mx-auto">
                            <BsPhone className="contact-icon mb-3 text-white" />
                            <h5 className="text-info">(88) 98857-3004</h5>
                            <p className="text-secondary">Seg a sab 8h - 18h</p>
                        </div>
                    </a>
                    <a href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener" className="col-12 col-lg-4 mb-5 text-decoration-none">
                        <div className="contact-item-hover text-center mx-auto">
                            <BsGeoAlt className="contact-icon mb-3 text-white" />
                            <h5 className="text-info">Juazeiro do Norte</h5>
                            <p className="text-secondary">Ceará, Brasil</p>
                        </div>
                    </a>
                    <a href="mailto:rafaskyplay@gmail.com" className="col-12 col-lg-4 text-decoration-none">
                        <div className="contact-item-hover text-center mx-auto">
                            <BsEnvelope className="contact-icon mb-3 text-white" />
                            <h5 className="text-info">rafaskyplay@gmail.com</h5>
                            <p className="text-secondary">Aguardo a sua mensagem</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;