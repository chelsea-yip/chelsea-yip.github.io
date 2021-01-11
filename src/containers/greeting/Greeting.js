import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p
                className="greeting-text-description subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.description}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="View my Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
