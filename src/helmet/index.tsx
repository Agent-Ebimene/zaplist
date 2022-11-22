import { mobileImg } from "assets";
import React from "react";
import { Helmet } from "react-helmet";

export const MyHelmet = () => {
  return (
    <Helmet>
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zaplist" />
      <meta
        property="og:description"
        content="Join the Zaplist!"
      />
      <meta property="og:image" content={mobileImg} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Zaplist" />
      <meta name="twitter:creator" content="@Zaplist" />
      <meta property="twitter:domain" content={window.location.href} />
      <meta property="twitter:url" content={window.location.href} />
      <meta name="twitter:title" content="Zaplist" />
      <meta
        name="twitter:description"
        content="Join the Zaplist!"
      />
      <meta name="twitter:image" content={mobileImg} />
    </Helmet>
  );
};
