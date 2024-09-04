import "./Skills.css";
import { SiAmazonwebservices } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { SiSqlalchemy } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiSqlite } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { FaSketch } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

function Skills() {
  return (
    <div className="main-skills-container">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="all-skills-container">
          <div className="skills-container-row">
            <div className="skill-name-container">
              <SiAmazonwebservices className="skill-icon" />
              <p>amazon web services</p>
            </div>

            <div className="skill-name-container">
              <FaHtml5 className="skill-icon" />
              <p>html5</p>
            </div>

            <div className="skill-name-container">
              <FaCss3Alt className="skill-icon" />
              <p>css3</p>
            </div>

            <div className="skill-name-container">
              <FaDocker className="skill-icon" />
              <p>docker</p>
            </div>

            <div className="skill-name-container">
              <SiExpress className="skill-icon" />
              <p>express</p>
            </div>
          </div>
          <div className="skills-container-row">
            <div className="skill-name-container">
              <IoLogoFigma className="skill-icon" />
              <p>figma</p>
            </div>

            <div className="skill-name-container">
              <SiFlask className="skill-icon" />
              <p>flask</p>
            </div>

            <div className="skill-name-container">
              <FaGitAlt className="skill-icon" />
              <p>git</p>
            </div>

            <div className="skill-name-container">
              <FaGithub className="skill-icon" />
              <p>github</p>
            </div>

            <div className="skill-name-container">
              <IoLogoJavascript className="skill-icon" />
              <p>javascript</p>
            </div>
          </div>
          <div className="skills-container-row">
            <div className="skill-name-container">
              <FaNodeJs className="skill-icon" />
              <p>node.js</p>
            </div>

            <div className="skill-name-container">
              <FaNpm className="skill-icon" />
              <p>npm</p>
            </div>

            <div className="skill-name-container">
              <BiLogoPostgresql className="skill-icon" />
              <p>postgresql</p>
            </div>

            <div className="skill-name-container">
              <FaPython className="skill-icon" />
              <p>python</p>
            </div>

            <div className="skill-name-container">
              <FaReact className="skill-icon" />
              <p>react</p>
            </div>
          </div>
          <div className="skills-container-row">
            <div className="skill-name-container">
              <SiRedux className="skill-icon" />
              <p>redux</p>
            </div>

            <div className="skill-name-container">
              <SiSequelize className="skill-icon" />
              <p>sequelize</p>
            </div>

            <div className="skill-name-container">
              <FaSlack className="skill-icon" />
              <p>slack</p>
            </div>

            <div className="skill-name-container">
              <SiSqlalchemy className="skill-icon" />
              <p>sqlalchemy</p>
            </div>

            <div className="skill-name-container">
              <VscVscode className="skill-icon" />
              <p>vscode</p>
            </div>
          </div>
          <div className="skills-container-row">
            <div className="skill-name-container">
              <SiSqlite className="skill-icon" />
              <p>sqlite</p>
            </div>

            <div className="skill-name-container">
              <SiRender className="skill-icon" />
              <p>render</p>
            </div>

            <div className="skill-name-container">
              <FaJava className="skill-icon" />
              <p>java</p>
            </div>

            <div className="skill-name-container">
              <MdHttp className="skill-icon" />
              <p>http</p>
            </div>

            <div className="skill-name-container">
              <FaSketch className="skill-icon" />
              <p>sketch</p>
            </div>
          </div>
          <div className="skills-container-row">
            <div className="skill-name-container">
              <SiAdobexd className="skill-icon" />
              <p>adobe xd</p>
            </div>

            <div className="skill-name-container">
              <SiAdobephotoshop className="skill-icon" />
              <p>adobe photoshop</p>
            </div>

            <div className="skill-name-container">
              <SiAdobeillustrator className="skill-icon" />
              <p>adobe illustrator</p>
            </div>

            <div className="skill-name-container">
              <SiAdobepremierepro className="skill-icon" />
              <p>adobe premiere pro</p>
            </div>

            <div className="skill-name-container">
              <SiAdobeaftereffects className="skill-icon" />
              <p>adobe after effects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
