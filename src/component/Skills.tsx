const Skills = () => {
  return (
    <section
      id="skill"
      className="skill min-h-screen py-32 px-[12%] w-full relative"
    >
      <h1 className="skill-title">Skills</h1>

      <div className="skill-info">
        <div className="grid">
          <div className="grid-card">
            <img src="skills/html.svg" alt="" />
            <div className="skill-desc">
              <h3>HTML</h3>
              <p>HTML structures web content.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/css.svg" alt="" />
            <div className="skill-desc">
              <h3>CSS</h3>
              <p>CSS styles the web beautifully.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/js.svg" alt="" />
            <div className="skill-desc">
              <h3>JavaScript</h3>
              <p>JavaScript adds interactivity.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/tailwind-css.svg" alt="" />
            <div className="skill-desc">
              <h3 className="tail">Tailwind</h3>
              <p>Tailwind enables custom styling.</p>
            </div>
          </div>
          <div className="grid-card">
            <img src="skills/git.svg" alt="" />
            <div className="skill-desc">
              <h3>Git</h3>
              <p>Git tracks and manages code.</p>
            </div>
          </div>
          <div className="grid-card">
            <img src="skills/bootstrap.svg" alt="" />
            <div className="skill-desc">
              <h3>Bootstrap</h3>
              <p>Bootstrap builds responsive layouts.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/node-js.svg" alt="" />
            <div className="skill-desc">
              <h3>Node.js</h3>
              <p>Node.js powers the server-side.</p>
            </div>
          </div>
          <div className="grid-card">
            <img src="skills/npm.svg" alt="" />
            <div className="skill-desc">
              <h3>NPM</h3>
              <p>NPM manages dependencies.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/express-js2.svg" alt="" />
            <div className="skill-desc">
              <h3>Express.js</h3>
              <p>Express.js simplifies backend.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/rest.svg" alt="" />
            <div className="skill-desc">
              <h3>RESTful API</h3>
              <p>MongoDB stores data flexibly.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/mongodb-icon.svg" alt="" />
            <div className="skill-desc">
              <h3>Mongo DB</h3>
              <p>MongoDB stores data flexibly.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src="skills/learning.svg" alt="" />
            <div className="skill-desc">
              <h3>Learning ...</h3>
              <p>Learning In Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
