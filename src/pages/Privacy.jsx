import "../styles/pages/privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-page page restricted-width">
      <div className="hero header-section">
        <h1>Privacy Policy</h1>
        <p className="hard-bolded">Last updated: January 29, 2026</p>
      </div>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          MacroUni ("we", "our", or "us") is committed to being transparent about how we collect, use, and protect your information. This Privacy Policy explains our data practices when you use our application.
        </p>
      </div>

      <div className="section">
        <h2>Information We Collect</h2>
        <p>
          To provide and improve our services, we collect information you provide directly, such as account details, nutrition entries, preferences, goals, and usage data. We may also collect device information, app interactions, and other data to enhance your experience.
        </p>
      </div>

      <div className="section">
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to operate and improve MacroUni, personalize your experience, provide nutrition insights and recommendations, communicate with you about updates or changes, and ensure the security of our services.
        </p>
      </div>

      <div className="section">
        <h2>Camera Access</h2>
        <p>
          MacroUni may request access to your device's camera for barcode scanning functionality to help you log foods quickly and accurately.
        </p>
      </div>

      <div className="section">
        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with service providers who help us operate our platform, or as required by law. Any third parties we work with are bound by confidentiality obligations.
        </p>
      </div>

      <div className="section">
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="section">
        <h2>Your Choices</h2>
        <p>
          You can access, update, or delete your account information through the app settings. You may also contact us to request information about the data we hold or to exercise your privacy rights.
        </p>
      </div>

      <div className="section">
        <h2>Changes to This Policy</h2>
        <p>
          If this policy changes, the "Last updated" date will be revised accordingly. Continued use of MacroUni after updates indicates acceptance of the revised policy.
        </p>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at dev.vjeryn@gmail.com.
        </p>
      </div>

      <div className="spacer" style={{ height: "50px", width: "100%" }}></div>
    </div>
  );
}
