import React from "react";
import "./TrustedCompanies.css";

export default function TrustedCompanies() {
  return (
    <section className="trusted-section">
      <p className="trusted-text">
        Trusted by over 17,000 companies and millions of learners around the world
      </p>

      <div className="trusted-logos">
        <img src="../../public/logo/volkswagen_logo.svg" alt="Volkswagen" />
        <img src="../../public/logo/samsung_logo.svg" alt="Samsung" />
        <img src="../../public/logo/cisco_logo.svg" alt="Cisco" />
        <img src="../../public/logo/vimeo_logo_resized-2.svg" alt="Vimeo" />
        <img src="../../public/logo/procter_gamble_logo.svg" alt="P&G" />
        <img src="../../public/logo/hewlett_packard_enterprise_logo.svg" alt="Hewlett Packard Enterprise" />
        <img src="../../public/logo/citi_logo.svg" alt="Citi" />
        <img src="../../public/logo/ericsson_logo.svg" alt="Ericsson" />
      </div>
    </section>
  );
}
