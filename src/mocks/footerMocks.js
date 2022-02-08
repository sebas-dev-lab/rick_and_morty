import imgNav from "../assets/img/logo_01.png";
import EnvConfig from "../config/Envs";
const { facebook, pinterest, tweeter, instagram } =
  EnvConfig.getSocialMediaLinks();

const footerMock = {
  // ===================   props =================== //
  centerProps: {
    href: false,
    classUl: "topList",
    basicClassLi: "topList--item",
    basicClassLink: "link",
    links: [
      {
        text: "Rick and Morty API",
        to: "https://rickandmortyapi.com/",
        classLink: "",
        classLi: "",
      },
    ],
  },
};

export default footerMock;
