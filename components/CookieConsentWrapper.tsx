
'use client';

import { useState, useEffect } from 'react';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import GoogleAnalytics from './GoogleAnalytics';

export default function CookieConsentWrapper() {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const hasConsented = getCookieConsentValue("myAwesomeCookieName") === "true";
    setIsConsentGiven(hasConsented);
  }, []);

  const handleAccept = () => {
    setIsConsentGiven(true);
  };

  return (
    <>
      {isConsentGiven && <GoogleAnalytics />}
      <CookieConsent
        location="bottom"
        buttonText="Sure, I accept!"
        cookieName="myAwesomeCookieName"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={handleAccept}
      >
        This website uses cookies to enhance the user experience and analyze site traffic through services like Google Analytics.
      </CookieConsent>
    </>
  );
}
