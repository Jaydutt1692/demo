export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img" style={{marginLeft: 120}}>
        <img src="./img/jaydutt_image.jpg" alt="About Me" className="about_img_section" style={{height: 400, width: 380}}/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Hello 😀</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
    </section>
  );
}
