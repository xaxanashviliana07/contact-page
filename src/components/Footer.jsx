import classes from '../modules/Footer.module.scss';
import layout from '../modules/Layout.module.scss';
import SendIcon from '../assets/send-icon.svg';
import QrCodeIcon from '../assets/qr-code.svg';
import GooglePlayIcon from '../assets/google-play.svg';
import AppStoreIcon from '../assets/app-store.svg';
import FacebookLogo from '../assets/facebook-icon.svg';
import TwitterLogo from '../assets/twitter-icon.svg';
import LinkedinLogo from '../assets/linkedin-icon.svg';
import InstagramLogo from '../assets/instagram-icon.svg';
import CopyRightIcon from '../assets/copyright-icon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes['footer']}>
      <div className={`${classes['footer-list']} ${layout['container']}`}>
        <div className={classes['footer-section-1']}>
          <div className={classes['form']}>
            <h3>Exclusive</h3>
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
          </div>
          <div className={classes['input-wrapper']}>
            <input type="text" placeholder="Enter your email" />
            <button>
              <img src={SendIcon} alt="send" />
            </button>
          </div>
        </div>
        <div className={classes['footer-section-2']}>
          <h3>Support</h3>
          <div className={classes['form']}>
            <p>
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className={classes['footer-section']}>
          <h3>Account</h3>
          <div className={classes['form']}>
            <p>
              <Link to={'/'}>My Account</Link>
            </p>
            <p>
              <Link to={'/login'}>Login / Register</Link>
            </p>
            <p>
              <Link to={'/cart'}>Cart</Link>
            </p>
            <p>
              <Link to={'/wishlist'}>Wishlist</Link>
            </p>
            <p>
              <Link to={'/shop'}>Shop</Link>
            </p>
          </div>
        </div>
        <div className={classes['footer-section']}>
          <h3>Quick Link</h3>
          <div className={classes['form']}>
            <p>
              <Link to={'/'}>Privacy Policy</Link>
            </p>
            <p>
              <Link to={'/'}>Terms Of Use</Link>
            </p>
            <p>
              <Link to={'/'}>FAQ</Link>
            </p>
            <p>
              <Link to={'/'}>Contact</Link>
            </p>
          </div>
        </div>
        <div className={classes['footer-section-5']}>
          <h3>Download App</h3>
          <div className={classes['form']}>
            <p>Save $3 with Ap New User Only</p>
            <div className={classes['download-app']}>
              <img src={QrCodeIcon} alt="qr-code" />
              <div className={classes['download-app-mobile']}>
                <a href="https://play.google.com/store/apps/">
                  <img src={GooglePlayIcon} alt="google-play" />
                </a>

                <a href="https://apps.apple.com/us/app">
                  <img src={AppStoreIcon} alt="app-store" />
                </a>
              </div>
            </div>
          </div>
          <div className={classes['social-media']}>
            <img src={FacebookLogo} alt="facebook" />
            <img src={TwitterLogo} alt="twitter" />
            <img src={InstagramLogo} alt="instagram" />
            <img src={LinkedinLogo} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className={classes['footer-bottom']}>
        <p>
          <img src={CopyRightIcon} alt="copyright" />
          Copyright 2024. All right reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;