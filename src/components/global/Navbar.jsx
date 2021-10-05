import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import device from "../Util/MediaQuery";
import styled from "styled-components";
import { Button } from "./Global";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
//custom hook
import useWindowDimensions from "../Util/useWindowDimensions";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 768) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line
  }, [width]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // eslint-disable-next-line
  }, [isMobileMenuOpen]);

  return (
    <StyledHeader course={props.course ? true : false}>
      <StyledNav>
        <Hamburger
          onClick={mobileMenuHandler}
          isMobileMenuOpen={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </Hamburger>
        <Links>
          <StyledLink to="/">
            <Logo
              src={
                props.course
                  ? "/images/green_logo.svg"
                  : "/images/white_logo.svg"
              }
              alt="Logo"
            />
          </StyledLink>
          <LinksTo
            isMobileMenuOpen={isMobileMenuOpen}
            course={props.course ? true : false}
          >
            <StyledLink to="/course">
              Courses
              {/* <KeyboardArrowDownIcon /> */}
            </StyledLink>
            <StyledLink to="/quiz">
              Academics
              {/* <KeyboardArrowDownIcon /> */}
            </StyledLink>
          </LinksTo>
        </Links>
        <div className="login">
          <Link to="/login">
            <StyledButton>Login</StyledButton>
          </Link>
        </div>
      </StyledNav>
      {props.course && (
        <TitleBar>
          <Sidebar to="/">
            <ArrowBackIcon />
            Courses
          </Sidebar>
          <TitleText>Maths</TitleText>
        </TitleBar>
      )}
    </StyledHeader>
  );
};
const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  ${device.tablet} {
    display: flex;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;
const LinksTo = styled.div`
  display: flex;
  align-items: center;
  ${({ course }) => course && `a{&:hover{color:#e0e0e0}}`}
  ${device.tablet} {
    display: none;
    ${({ isMobileMenuOpen, course }) => {
      if (isMobileMenuOpen) {
        let styles = `position:absolute;
            top:70px;
            left:0px;
            width:100%;
            height:fit-content;
            padding-bottom:16px;
            display:flex;
            flex-direction:column;
            align-items: flex-start;
            background:  white;
            box-shadow:0px 4px 8px 1px rgb(0 0 0 / 11%);
            a{
              margin-left:48px;
              margin-top:20px;
              margin-bottom:20px;
              font-size:20px;
              border-bottom:4px solid #1bbc9b;
              border-radius:4px/8px;
              padding:8px 4px
              }`;
        if (course) {
          styles += `
                background :linear-gradient(
                    86.94deg,
                    #1bbc9b 0%,
                    #1bbc9b 0.01%,
                    #16a086 100%
                  );
                  color:white;
                  z-index:20;
                  a{
                    border-bottom:4px solid #fff;
                    &:hover{
                      color:#e0e0e0;
                    }
                  }
                `;
        }
        return styles;
      }
    }};
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 3rem;
  display: flex;
  align-items: center;
  color: inherit;
  transition: all 0.3s ease-in-out;
  ${device.tablet} {
    margin-right: 0rem;
  }
  &:hover {
    color: #1bbc9b;
  }
`;
const StyledHeader = styled.header`
  background: ${(props) =>
    props.course
      ? `linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  )`
      : `white`};
  color: ${(props) => (props.course ? `white` : `black`)};
  padding: 0rem 2rem;
  position: relative;
  box-shadow: ${(props) => !props.course && `0px 4px 8px 1px rgb(0 0 0 / 11%)`};
  ${device.tablet} {
    padding: 0rem 1rem;
  }
  ${device.mobileL} {
    padding: 0rem 0.5rem;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0rem;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 62px;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(
    86.94deg,
    #1bbc9b 0%,
    #1bbc9b 0.01%,
    #16a086 100%
  );
  color: white;
`;

const TitleBar = styled.div`
  border-top: 1px solid white;
  padding: 1rem 0rem;
  position: sticky;
  top: 0px;
  left: 0px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr;
`;
const Sidebar = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const TitleText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
export default Navbar;
