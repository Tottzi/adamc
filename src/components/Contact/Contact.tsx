import React, { useState } from "react";
import { Grid, Segment, Container } from "semantic-ui-react";
import "./Contact.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = (props: any) => {
  const initialHover: {
    faLinkedin: boolean;
    faGithub: boolean;
    fiMail: boolean;
  } = {
    faLinkedin: false,
    faGithub: false,
    fiMail: false,
  };
  const [hover, sethover] = useState<any>(initialHover);
  interface hoverStyleFace {
    cursor: string;
    color: string;
    borderColor?: string;
    marginTop?: string;
  }
  const hoverStyle: hoverStyleFace = {
    cursor: "pointer",
    color: "rgba(0, 194, 253, 1)",
    marginTop: "1rem",
  };
  const hoverStyleOut: hoverStyleFace = {
    cursor: "pointer",
    color: "white",
    marginTop: "1rem",
  };

  return (
    <div className="contact">
      <div className="contact-box">
        <span className="contact-box__close-icon" onClick={props.handleContact}>
          x
        </span>
        <Segment placeholder>
          <Grid rows={3} relaxed="very" stackable>
            <Grid.Row>
              <Container
                onMouseEnter={() =>
                  sethover({ ...hover, faLinkedin: !hover.faLinkedin })
                }
                onMouseLeave={() =>
                  sethover({ ...hover, faLinkedin: !hover.faLinkedin })
                }
                style={hover.faLinkedin ? hoverStyle : hoverStyleOut}
              >
                <a
                  href="https://www.linkedin.com/in/adam-csetneki-a7141576/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <FaLinkedin />
                </a>
              </Container>
            </Grid.Row>
            <Grid.Row>
              <Container
                onMouseEnter={() =>
                  sethover({ ...hover, faGithub: !hover.faGithub })
                }
                onMouseLeave={() =>
                  sethover({ ...hover, faGithub: !hover.faGithub })
                }
                style={hover.faGithub ? hoverStyle : hoverStyleOut}
              >
                <a
                  href="https://github.com/Tottzi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github <FaGithub />
                </a>
              </Container>
            </Grid.Row>
            <Grid.Row>
              <Container
                onMouseEnter={() =>
                  sethover({ ...hover, fiMail: !hover.fiMail })
                }
                onMouseLeave={() =>
                  sethover({ ...hover, fiMail: !hover.fiMail })
                }
                style={hover.fiMail ? hoverStyle : hoverStyleOut}
              >
                <a
                  href="mailto:adam.csetneki@outlook.com?subject=Contact_portfolio_website"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mail
                  <FiMail />
                </a>
              </Container>
            </Grid.Row>
          </Grid>

          {/* <Divider vertical>Or</Divider> */}
        </Segment>
      </div>
    </div>
  );
};

export default Contact;
