import React from 'react';
import Modal from 'react-modal';
// import $ from "jquery";

import teamUp from './assets/icons/teamViewUp.png';
import teamDown from './assets/icons/teamViewDown.png';
import aboutIn from './assets/icons/about-butt.png';
import aboutOut from './assets/icons/about-exit-butt.png';

import twitter from './assets/icons/twitter.svg';
import linkedin from './assets/icons/LinkedIn.svg';

import StevenImage from './assets/photos/editedPhotos/steven.jpg';
import MattImage from './assets/photos/editedPhotos/mat.jpg';
import JohnImage from './assets/photos/editedPhotos/john.jpg';
import LauraImage from './assets/photos/editedPhotos/laura.jpg';
import LiamImage from './assets/photos/editedPhotos/liam.jpg';
import AnaImage from './assets/photos/Ana.jpg';
import GioImage from './assets/photos/editedPhotos/gio.jpg';
import DareImage from './assets/photos/editedPhotos/dare.jpg';

// const ModalStyle = require("./modal_style");


class AboutModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      showTeam: false,
    };

    window.SessionOpenModal = () => {
      this.setState({openModal: true});
    };

    window.SessionOpenModal = window.SessionOpenModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleTeam = this.toggleTeam.bind(this);
    this.onProfileHover = this.onProfileHover.bind(this);
    this.leaveProfileHover = this.leaveProfileHover.bind(this);
  }

  toggleModal(modalState) { 
    this.setState({
      openModal: !this.state.openModal
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleTeam () {
    const mainColumnClass = this.state.showTeam?  "mainColumnCentral" : "hidden"
    this.props.shiftMainColumn(mainColumnClass)
    this.props.setProfDescripClassandContent("hidden", "")
    this.setState({
      showTeam: !this.state.showTeam,
    })
  }

  onProfileHover(profileDescription){
    this.props.setProfDescripClassandContent("profileDescriptions", profileDescription)
  }

  leaveProfileHover(){
    this.props.setProfDescripClassandContent("hidden", "")
  }

  render() {

    const Profile = (props) => {

      return(
        <div className="team-column" onMouseEnter={() => this.onProfileHover(props.description)} onMouseLeave={this.leaveProfileHover}>
          <div> {props.name} </div>
          <div className="imageOverlay">
            <img src={props.imgsrc} alt="img" />
          </div>
          <div className="title"> {props.title} </div>
          <div className="socialMedia">
            { props.twitterLink? <a href={props.twitterLink}> <img className="socialMediaLink bounceOnHover" alt="twitter" src={twitter} /> </a> : ""}
            <a href={props.linkedinLink}> <img className="socialMediaLink bounceOnHover" alt="linkedIn" src={linkedin} /> </a>
          </div>
        </div>
      )
    }

    console.log("render state", this.state)

    return (
      <div className="about-container">
        <img
          className="about-button bounceOnHover"
          src={this.state.openModal ? aboutOut : aboutIn}
          onClick={() => this.toggleModal("open")}
          alt="about button"
        />
        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyles}
          contentLabel="About Modal"
          className="about-modal"
        >
          <div className="about-div">
            <div className={this.state.showTeam ? "hidden" : "about-body"}>
              <div className={this.state.showTeam ? "hidden" : "aboutBuffer"}>
                {" "}
              </div>
              <div className="scrollableContent">
                <span className="sumSentence">
                  {" "}
                  Progeny provides a crowdfunding portal tailored to the needs
                  of developers that transforms the equity of real estate
                  projects into liquid transferable tokens.
                </span>
                <br />
                <br />
                With the advent of blockchain technology, financial capital has
                the potential to be more accessible than ever before to people
                with novel ideas, while providing tools for investors to
                increase transparency and accountability for their investments
                Progeny seeks to fulfill this potential by providing prospective
                real estate developers with blockchain tools and resources to
                manage, showcase, and finance their projects. In particular,
                Progeny will aid developers in transforming the equity of their
                projects into into tradable asset-backed digital tokens, using
                either a Reg D or Reg A exemption from the SEC. Investors will
                use each developer-specific portal as an analytical dashboard
                for tracking the performance of their investment and vetting the
                proposed prospects of each developer. While we are focusing our
                platform on the needs of real estate developers, especially
                facilitating SEC compliance, we intend to make use of blockchain
                technology’s growing cross-platform and decentralized apparatus
                of enabling infrastructure for investors.
              </div>
            </div>

            <div className="teamIntro bounceOnHover" onClick={this.toggleTeam}>
              {" "}
              <img
                alt="teamIcon"
                src={this.state.showTeam ? teamDown : teamUp}
              />{" "}
            </div>
            <div className={`${!this.state.showTeam ? "hidden" : ""} team`}>
              <div className="team-row">
                <Profile
                  name="steven tortora"
                  imgsrc={StevenImage}
                  title="blockchain engineer"
                  twitterLink=""
                  linkedinLink="https://www.linkedin.com/in/steven-tortora-49392285/"
                  description="Steven is our blockchain engineer. He is primarily focused on building out the platform’s blockchain architecture."
                />
                <Profile
                  name="mat steele"
                  imgsrc={MattImage}
                  title="senior engineer"
                  twitterLink="https://twitter.com/urbanagrapher"
                  linkedinLink="https://www.linkedin.com/in/steven-tortora-49392285/"
                  description="Mat provides broad technical support for our engineers."
                />
                <Profile
                  name="ana canales"
                  imgsrc={AnaImage}
                  title="back-end engineer"
                  twitterLink="https://twitter.com/Pia_Solis"
                  linkedinLink="https://www.linkedin.com/in/assolisc/"
                  description="Ana works at the Losonczy Lab in Columbia's Jerome L. Greene Science Center. With a background in comp sci and anthro, Ana works part-time helping build how our site interacts with the blockchain."
                />
              </div>

              <div className="team-row">
                <Profile
                  name="laura chavez"
                  imgsrc={LauraImage}
                  title="project manager"
                  twitterLink=""
                  linkedinLink="https://www.linkedin.com/in/laura-a-chavez-varela/"
                  description="Lau is a Columbia/LSE student with a policy background. She is guiding filings with the SEC, and helps with HR and contracts."
                />
                <Profile
                  name="liam zhang"
                  imgsrc={LiamImage}
                  title="front-end developer"
                  twitterLink=""
                  linkedinLink="https://www.linkedin.com/in/liamzhang40/"
                  description="Liam is our lead front-end programmer. "
                />
                <Profile
                  name="john rudell"
                  imgsrc={JohnImage}
                  title="front-end developer"
                  twitterLink=""
                  linkedinLink="https://www.linkedin.com/in/johnrudell/"
                  description="John works at Gemini, and helped found Progeny. On the side, he continues to provide support with design and our front-end."
                />
              </div>

              <div className="team-row">
                <Profile
                  name="giorgi suladze"
                  imgsrc={GioImage}
                  title="project
 manager"
                  twitterLink="https://twitter.com/giosuladze"
                  linkedinLink="https://www.linkedin.com/in/giorgisuladze/"
                  description="With a background in management consulting, Giorgi has helped with our financial and economic analysis and built up Progeny’s operating framework"
                />
                <Profile
                  name="dare gundipe"
                  imgsrc={DareImage}
                  title="back-end engineer"
                  twitterLink=""
                  linkedinLink="https://www.linkedin.com/in/obadare-dar%C3%A9-ogundipe-a75898125/"
                  description="Dare works part-time developing the architecture for how Progeny will instatiate each portal. "
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;


const ModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 10
  },
  content: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(26, 26 , 26 , 0.95)"
  }
};
