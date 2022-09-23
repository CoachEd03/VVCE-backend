import React from "react";
import MainPic from "./assets/victor freitas.jpg";
import AboutPic from "./assets/tables.png";

export default function Home() {
  return (
    <div className="HomeContainer">
      <img alt="introHomeImage" src={MainPic} />
      <img alt="AboutPic" src={AboutPic} />

      <div className="InviteContainer">
        <h2 className="InviteContainer__mainHeading">delightful experiences</h2>
        <h1 className="InviteContainer__subHeading">
          Welcome to "Deeplight Restaurant"
        </h1>
        <button>Reservation</button>
      </div>

      <div className="AboutContainer">
        <div className="AboutContainer__TopRedline"></div>
        <h2 className="AboutContainer__mainHeading">honest,flavorful food</h2>
        <h1 className="AboutContainer__subHeading">
          A FEW WORDS ABOUT OUR RESTAURANT
        </h1>
        <div className="AboutContainer__blackline"></div>
        <p className="AboutContainer__paragraph">
        As a restaurant operator, you have to wear many different hats, even if the responsibilities you take on are not within your expertise. Writing is one of those tasks. It can be intimidating to write something customers find interesting, whether it be creating a new email campaign or a website’s About Us section. 
However, the about page on your site is particularly important for online visitors. Customers are naturally curious, and not just about your menu. An about page tells the story of a business, highlighting what makes a restaurant unique. Everyone loves a good origin story!
Menufy builds free brand-based online ordering websites for our restaurant partners, including an About Us section. Our associates, such as Erin Trampel, a senior graphic designer, have experience helping our clients highlight interesting and informative content to include on their websites. 
“An About Us section helps your customers connect more with your restaurant and grow an attachment to it,” Trampel explains.
        </p>
        <button className="AboutContainer__ReadMorebutton">Read More</button>
        <div className="AboutContainer__Redline"></div>
      </div>
    </div>
  );
}