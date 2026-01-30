import "../styles/pages/privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-page page restricted-width">
      <div className="hero header-section">
        <h1>Privacy Policy</h1>
        <p className="hard-bolded">Last updated: January 21, 2026</p>
      </div>

      <div className="section">
        <h2>Your Data, Your Control</h2>
        <p>
          MacroUni is designed to operate entirely on your device. All data you enter, generate, or interact with is processed locally and remains under your control. We do not
          sell, share, or distribute user data to third parties.
        </p>
      </div>

      <div className="section">
        <h2>Data We Process</h2>
        <p>
          To function correctly, MacroUni processes the information you provide and the actions you take within the app, such as nutrition entries, preferences, and usage-related
          interactions. This processing happens internally within the app and is not transmitted to external servers.
        </p>
        <p>MacroUni does not collect personally identifiable information for remote storage, tracking, or profiling purposes.</p>
      </div>

      <div className="section">
        <h2>Camera Access</h2>
        <p>
          MacroUni may request access to your device’s camera solely for barcode scanning functionality. Camera input is processed in real time on your device and is not recorded,
          stored, or sent to any server.
        </p>
      </div>

      <div className="section">
        <h2>Data Storage</h2>
        <p>
          All data is stored locally using your browser or device’s local storage. This means your information stays on your device unless you choose to remove it. You can delete
          all stored data at any time through your browser settings or the in-app reset options.
        </p>
      </div>

      <div className="section">
        <h2>Third-Party Services</h2>
        <p>MacroUni does not use third-party analytics, advertising networks, social media integrations, or tracking technologies. No external services receive your app data.</p>
      </div>

      <div className="section">
        <h2>Security</h2>
        <p>
          Because your data never leaves your device, its security depends on your device’s protections. We recommend using strong passwords, biometric locks, and keeping your
          operating system and browser up to date.
        </p>
      </div>

      <div className="section">
        <h2>Changes to This Policy</h2>
        <p>If this policy changes, the “Last updated” date will be revised accordingly. Continued use of MacroUni after updates indicates acceptance of the revised policy.</p>
      </div>
        <div className="spacer" style={{ height: "50px", width: "100%" }}></div>

    </div>
  );
}
