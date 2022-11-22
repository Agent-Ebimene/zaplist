import { mobileImg } from "assets";
import React from "react";
import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
  description: string;
  ogType: string;
  username: string;
  image: string;
}

const MyHelmet = (props: HelmetProps) => {
  const PUBLIC_URL = window.location.origin;
  const url = window.location.href;
  const imageUrl = PUBLIC_URL + props.image;

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={props.username} />
      <meta name="twitter:creator" content={props.username} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:src" content={imageUrl} />
    </Helmet>
  );
};

MyHelmet.defaultProps = {
  title: "Zaplist",
  description: "Join the Zaplist!",
  ogType: "website",
  image: "/thumbnail.jpg", // point to your default Opengraph image
  username: "@zaplist",
};

export { MyHelmet };
