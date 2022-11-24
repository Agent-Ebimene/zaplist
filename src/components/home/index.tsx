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
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail("");
  }, [clear]);

  const twitterUrl = "#";
  const instagramUrl = "#";
  const termsOfUse = "#";
  const privacyPolicy = "#";

  return (
    <>
      <main className={sent ? styles.blur : ""}>
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
                <div className={styles.inputMsgWrap}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    disabled={loading}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {error ? <p className={styles.error}>{error}</p> : ""}
                </div>
                <button onClick={() => addToWaitlist(email.trim())}>
                  {!loading ? (
                    "Join the Zaplist"
                  ) : (
                    <div className={styles.spinner}></div>
                  )}
                </button>
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
              <a href={twitterUrl} target={"_blank"} rel="noreferrer">
                <TwitterIcon />
              </a>
              <a href={instagramUrl} target={"_blank"} rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
            <small className={styles.footerTxt}>
              © 2022-2023 Zap. All rights reserved.
            </small>
          </div>

          <div className={styles.footerSec2}>
            <a href={termsOfUse} target={"_blank"} rel="noreferrer">
              Terms of Use
            </a>
            <a href={privacyPolicy} target={"_blank"} rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </footer>
      </main>

      {sent ? (
        <div className={styles.successWrapper}>
          <div className={styles.successBody}>
            <h1 className={styles.successTtl}>THAT’S IT !</h1>
            <p className={styles.successTxt}>
              Congratulations ! You’re officially on the ZAPlist and will get
              early access! Keep an eye out for our emails. You can also follow
              our socials for updates.
            </p>
            <div className={styles.successSocials}>
              <a href={twitterUrl} target={"_blank"} rel="noreferrer">
                <TwitterIcon />
              </a>
              <a href={instagramUrl} target={"_blank"} rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export { HomeUI };
