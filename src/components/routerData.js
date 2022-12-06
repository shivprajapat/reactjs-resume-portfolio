import { About, Contact, Home, Portfolio, Resume, Skills } from "../containers";

const routerData = [
  { path: "/", pageName: <Home /> },
  { path: "/about", pageName: <About /> },
  { path: "/skills", pageName: <Skills /> },
  { path: "/resume", pageName: <Resume /> },
  { path: "/portfolio", pageName: <Portfolio /> },
  { path: "/contact", pageName: <Contact /> },
];
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export { routerData, navLinks };
