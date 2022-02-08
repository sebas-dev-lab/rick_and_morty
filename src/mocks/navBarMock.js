import imgNav from "../assets/img/logo_01.png";
import EnvConfig from "../config/Envs";
const { facebook, pinterest, tweeter, instagram } =
  EnvConfig.getSocialMediaLinks();

const navBarMockOne = {
  // =================== Right props =================== //
  leftProps: {
    href: true,
    classUl: "",
    basicClassLi: "",
    basicClassLink: "",
    links: [
      {
        text: "",
        to: facebook || "#",
        classLink: "",
        classLi: "topIcon fab fa-facebook-square",
      },
      {
        text: "",
        to: tweeter || "#",
        classLink: "",
        classLi: "topIcon fab fa-twitter-square",
      },
      {
        text: "",
        to: pinterest || "#",
        classLink: "",
        classLi: "topIcon fab fa-pinterest-square",
      },
      {
        text: "",
        to: instagram || "#",
        classLink: "",
        classLi: "topIcon fab fa-instagram-square",
      },
    ],
  },
  // ===================  Center props =================== //
  centerProps: {
    href: false,
    classUl: "topList",
    basicClassLi: "topList--item",
    basicClassLink: "link",
    links: [
      {
        text: "Home",
        to: "/",
        classLink: "",
        classLi: "",
      },
      {
        text: "Test",
        to: "#",
        classLink: "",
        classLi: "",
      },
      {
        text: "Contact",
        to: "#",
        classLink: "",
        classLi: "",
      },
    ],
  },
  // =================== Left Props =================== //
  rightProps: {
    src: imgNav,
    alt: "circleImg",
    classImg: "topImg",
    link: "/",
  },
};

export default navBarMockOne;
