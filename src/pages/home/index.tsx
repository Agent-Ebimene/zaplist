import { HomeUI } from "components";
import * as React from "react";
import axios from "axios";

const waitlistURL = `https://zap-waitlist.herokuapp.com/v1/user`;

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [clear, setClear] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState("");

  const isValidEmail = (email) => {
    return (
      email &&
      email != "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
  };

  const addToWaitlist = (email) => {
    if (!isValidEmail(email)) {
      setError("Enter a valid email");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    setError("");
    setLoading(true);

    axios
      .post(waitlistURL, { email })
      .then((res) => {
        if (res.status === 200) {
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 10000);
          setClear(!clear);
        }
      })
      .catch((err) => {
        setError(
          err.response.data.error &&
            err.response.data.error.match("duplicate key error")
            ? "This email already exists in the waitlist!"
            : "Failed to join waitlist, please try again later"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <HomeUI
        loading={loading}
        error={error}
        addToWaitlist={addToWaitlist}
        sent={sent}
        clear={clear}
      />
    </>
  );
};
export { Home };
