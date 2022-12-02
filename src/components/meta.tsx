import { useTranslation } from "next-i18next";
import Head from "next/head";
import Script from "next/script";

function Meta() {
  const { t } = useTranslation();

  const tagline = t("tagline");

  return (
    <>
      <Head>
        <title>{t("chronotrains")}</title>

        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <meta content={tagline} name="Description" />

        <meta content={t("chronotrains")} property="og:title" />
        <meta content={tagline} property="og:description" />
        <meta
          content="https://www.chronotrains.com/thumbnail.png"
          property="og:image"
        />
        <meta content="https://www.chronotrains.com" property="og:url" />

        <meta content={t("chronotrains")} name="twitter:title" />
        <meta content={tagline} name="twitter:description" />
        <meta
          content="https://www.chronotrains.com/thumbnail.png"
          name="twitter:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7420123397062174"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default Meta;
