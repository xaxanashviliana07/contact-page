import Header from '../components/Header.jsx'
import Footer from "../components/Footer.jsx";
import Phone from "../assets/phone.svg"
import Envelope from "../assets/envelope.svg"
import classes from "../modules/Contact.module.scss";
import layout from '../modules/Layout.module.scss';

const Contact = () => {
    return(
        <div className={`${classes["contact-wrapper"]}`}>
            <Header/>
            <div className={`${layout['container']}`}>
                <div className={`${classes["page-name"]}`}>
                    <p className={`${classes["name1"]}`}>Home </p>
                    <p className={`${classes["name1"]}`}>/ </p>
                    <p>Contact</p>
                </div>
                <div className={`${classes["contact-form-wrapper"]}`}>
                    <div className={`${classes["contact-help"]}`}>
                        <div>
                            <div className={`${classes["help"]}`}>
                                <div className={`${classes["image"]}`}>
                                    <img src={Phone} alt="phone"/>
                                </div>
                                <h3>Call To Us</h3>
                            </div>
                            <div>
                                <p className={`${classes["info"]}`}>We are available 24/7, 7 days a week.</p>
                                <p className={`${classes["info"]}`}>Phone: +8801611112222</p>
                            </div>
                        </div>
                        <div className={`${classes["underline"]}`}></div>
                        <div className={`${classes["email-help"]}`}>
                            <div className={`${classes["help"]}`}>
                                <div className={`${classes["image"]}`}>
                                    <img src={Envelope} alt="email"/>
                                </div>
                                <h3>Write To US</h3>
                            </div>
                            <div>
                                <p className={`${classes["info"]}`}>Fill out our form and we will contact you within 24 hours.</p>
                                <p className={`${classes["info"]}`}>Emails: customer@exclusive.com</p>
                                <p className={`${classes["info"]}`}>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes["contact-form"]}`}>
                        <div className={`${classes["contact-form-top"]}`}>
                            <input type={"text"} placeholder={"  Your Name * "}></input>
                            <input type={"email"} placeholder={"  Your Email * "}></input>
                            <input placeholder={" Your Phone * "}></input>
                        </div>
                        <div className={`${classes["massage-input"]}`}>
                            <input placeholder={"  Your Massage"}></input>
                        </div>
                        <div>
                            <button type={"submit"}>Send Massage</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    )
}
export default Contact