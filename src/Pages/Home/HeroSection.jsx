export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Jaydutt</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">CST</span> <br />
            Networking Student
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
          {/* <br /> */}
        </div>
        <div className="getInTouchLayout" style={{ paddingTop: 20 }}>
          <a href="mailto:pateljaydutt3110@gmail.com">
            <button className="btn btn-primary">Get In Touch</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
