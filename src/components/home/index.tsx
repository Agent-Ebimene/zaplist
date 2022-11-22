import {
  InstagramIcon,
  logo,
  mobileImg,
  supportIcon,
  TwitterIcon,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface HomeProps {
  loading: boolean;
  sent: boolean;
  error: string;
  clear: boolean;
  addToWaitlist: (email: string) => void;
}

const HomeUI: React.FC<HomeProps> = ({
  loading,
  error,
  sent,
  addToWaitlist,
  clear,
}) => {
  const [hover, setHover] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail("");
  }, [clear]);

  return (
    <>
      <main>
        <header className={`container ${styles.header}`}>
          <img className={styles.logo} src={logo} alt="logo" />
          <nav className={styles.nav}>
            <a href="#" target={"_blank"} rel="noreferrer">
              Support
            </a>
            <a href="#" target={"_blank"} rel="noreferrer">
              FAQ
            </a>
            <a href="#" target={"_blank"} rel="noreferrer">
              How it works
            </a>
          </nav>
        </header>
        <section className={styles.heroWrapper}>
          <div className={`container ${styles.heroSec}`}>
            <img
              className={styles.heroImg}
              src={mobileImg}
              alt="zaplist mobile app"
            />
            <div className={styles.txtSec}>
              <h1 className={styles.ttl}>JOIN OUR ZAPLIST</h1>
              <p className={styles.txt}>
                Submit your Email to join the Waitlist and become one of the
                first humans to ZAP. <br />
                We’ll let you know as soon as we launch the platform.
              </p>
              <div className={styles.inputSec}>
                <input type="email" placeholder="Your Email" />
                <button>Join the Zaplist</button>
              </div>
            </div>
          </div>
        </section>
        <footer className={`container ${styles.footer}`}>
          <a
            className={styles.footerSupport}
            href="#"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={supportIcon} />
          </a>

          <div className={styles.footerSec1}>
            <div className={styles.footerImgSec}>
              <img src={logo} alt="zaplist logo" />
              <a href="#" target={"_blank"} rel="noreferrer">
                <TwitterIcon />
              </a>
              <a href="#" target={"_blank"} rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
            <small className={styles.footerTxt}>
              © 2022-2023 Zap. All rights reserved.
            </small>
          </div>

          <div className={styles.footerSec2}>
            <a href="#" target={"_blank"} rel="noreferrer">
              Terms of Use
            </a>
            <a href="#" target={"_blank"} rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};
export { HomeUI };
