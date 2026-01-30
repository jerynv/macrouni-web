import '../styles/pages/Home.css'

export default function Home() {
  return (
    <div className="page">
      <div className="thin-font section hero">
        <h1>
          <span className="brand">MacroUni</span> is a transparent, data driven nutrition tracking platform that empowers students and faculty to live healthier lives.
        </h1>
      </div>
      <div className="section">
        <p>
          <span className="bolded solid">MacroUni for Students</span> is a comprehensive macro tracking platform designed specifically for university and college students, helping
          you balance nutrition with your academic lifestyle.
        </p>
      </div>
      <div className="section">
        <p>
          <span className="bolded solid">Campus Integration</span> Our innovative platform integrates with your university's dining services, delivers accurate nutritional
          information for campus meals, and provides personalized meal planning exactly when you need it.
        </p>
      </div>
      <div className="section">
        <p>
          <span className="bolded solid">MacroUni Ai</span> leverages cutting-edge AI technology to offer personalized nutrition advice, meal suggestions, and real-time tracking, making it easier than ever
          to meet your health goals.
        </p>
      </div>
      {/* <a href="/showcase" className="link showcase-button">Showcase</a> */}
    </div>
  );
}
