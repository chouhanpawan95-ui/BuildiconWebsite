import React from "react";

const PrivacyPolicy = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/privacy-policy.pdf";
    link.download = "Privacy-Policy.pdf";
    link.click();
  };

  return (
   <div className="container-fluid py-5">
    <p>Our website uses cookies to enhance user experience and analyze website performance.
You can manage or disable cookies through your browser settings at any time.</p>
Third-Party Services

We may use trusted third-party tools such as Google Analytics, email service providers, or payment gateways.
These third parties are governed by their own privacy policies and comply with data protection regulations.
    <button
      onClick={handleDownload}
      className="btn btn-primary"
    >
      Download Privacy Policy
    </button>
    </div>
  );
};

export default PrivacyPolicy;
