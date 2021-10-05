import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Global";
import device from "../Util/MediaQuery";

const Footer = () => {
  return (
    <StyledFooterSection>
      <Wrapper>
        <StyledFooter>
          <Foot>
            <FootHead>Contact Us</FootHead>
            <Para>
              Hajauli, Ballia, Varanasi, <br /> Uttarpradesh, 221701
            </Para>
            <Para>
              Contact no: <span>7510545225</span>
            </Para>
            <Para>
              Email: <br /> editor-in-chief@agrivision4u.com
            </Para>
            <SocialMedia>
              <StyledLink to="/">
                <img src="./images/icons/facebook.svg" alt="facebook" />
              </StyledLink>
              <StyledLink to="/">
                <img src="./images/icons/instagram.svg" alt="instagram" />
              </StyledLink>
              <StyledLink to="/">
                <img src="./images/icons/youtube.svg" alt="youtube" />
              </StyledLink>
              <StyledLink to="/">
                <img src="./images/icons/twitter.svg" alt="twitter" />
              </StyledLink>
              <StyledLink to="/">
                <img src="./images/icons/mail.svg" alt="mail" />
              </StyledLink>
            </SocialMedia>
          </Foot>
          <Foot>
            <FootHead>Brand and Security</FootHead>
            <StyledLink to="/">Report Copyright Infringement</StyledLink>
            <StyledLink to="/">Report Security Issue</StyledLink>
            <StyledLink to="/">Trademark Notice</StyledLink>
            <StyledLink to="/">Advertise with us</StyledLink>
            <StyledLink to="/">Help and Support</StyledLink>
          </Foot>
          <Foot>
            <FootHead>Company</FootHead>
            <StyledLink to="/">About us</StyledLink>
            <StyledLink to="/">Why choose us</StyledLink>
            <StyledLink to="/">Our Partners</StyledLink>
            <StyledLink to="/">Privacy Policy</StyledLink>
            <StyledLink to="/">Terms & Conditions</StyledLink>
          </Foot>
          <SideFoot>
            <CheckBoxWrapper>
              <CheckBox type="checkbox" id="news-letter-checkbox" />
              <CheckBoxLabel htmlFor="news-letter-checkbox">
                Stay Up to date with our newsletter
              </CheckBoxLabel>
            </CheckBoxWrapper>
            <EmailWrapper>
              <h4>Sign up for our newsletter</h4>
              <div>
                <EmailInput
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <EmailButton
                  primary
                  type="submit"
                  className="yes-please-button"
                >
                  YES, PLEASE
                </EmailButton>
              </div>
            </EmailWrapper>
            <FooterLogo>
              <img src="./images/icons/agrivision4u.svg" alt="AgriVision4U" />
              <img src="./images/icons/msme.svg" alt="MSME" />
            </FooterLogo>
          </SideFoot>
        </StyledFooter>
      </Wrapper>
      <CopyRightWrapper>
        <CopyRight>Copyrights &copy; AgriVision4U 2021</CopyRight>
      </CopyRightWrapper>
    </StyledFooterSection>
  );
};
const StyledFooterSection = styled.footer`
  background-color: #00113d;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 430px;
`;
const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.8fr;
  align-items: center;
  max-width: 95%;
  width: 100%;
  margin: auto;
  ${device.laptop} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Foot = styled.div`
  max-width: 250px;
  margin-top: 24px;
  align-self: start;
  margin: auto;
  height: 100%;
  ${device.laptop} {
    margin: 0 rem(8);
  }
  ${device.laptop} {
    text-align: center;
    margin: 24px auto;
    &:nth-child(1) {
      margin-top: 48px;
    }
  }
`;
const SideFoot = styled(Foot)`
  max-width: 580px;
  ${device.laptop} {
    max-width: none;
    text-align: center;
    width: 100%;
    margin-top: 16px;
  }
`;
const FootHead = styled.h3`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
  ${device.laptop} {
    text-align: center;
    margin-bottom: 16px;
    margin-top: 20px;
  }
`;
const Para = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
`;
const StyledLink = styled(Link)`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  display: block;
  color: white;
`;
const SocialMedia = styled.div`
  display: flex;
  ${device.laptop} {
    justify-content: center;
  }

  img {
    width: 24px;
    margin: 4px;
  }
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  ${device.laptop} {
    justify-content: center;
  }
`;
const CheckBox = styled.input`
  height: 18px;
  width: 18px;
  display: inline-block;
  margin-right: 4px;
  ${device.mobileL} {
    height: 16px;
    width: 16px;
  }
`;
const CheckBoxLabel = styled.label`
  font-size: 18px;
  line-height: 1;
  ${device.tablet} {
    font-size: 14px;
  }
  ${device.mobileL} {
    text-align: center;
    font-size: 16px;
  }
`;
const EmailWrapper = styled.div`
  margin-top: 20px;
  h4 {
    font-size: 18px;
    margin-bottom: 20px;
    ${device.tablet} {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
`;

const EmailInput = styled.input`
  padding: 10px 16px;
  width: 250px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 6px;
  outline: none;
  border: none;
  display: inline-block;
  ${device.laptop} {
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
  }
  ${device.tablet} {
    padding: 10px 14px;
    width: 250px;
    border-radius: 7px;
    font-size: 14px;
  }
  ${device.mobileL} {
    padding: 8px 12px;
    border-radius: 6px;
    width: 300px;
    font-size: 14px;
  }
`;
const EmailButton = styled(Button)`
  padding: 10px 16px;
  margin-left: 6px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  ${device.laptopL} {
    padding: 8px 12px;
    margin-top: 4px;
  }
  ${device.laptop} {
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    margin-left: 8px;
  }
  ${device.tablet} {
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 12px;
    margin-top: 12px;
    font-weight: 600;
    margin-left: 4px;
  }
  ${device.mobileL} {
    padding: 8px 12px;
    border-radius: 4px;
    margin-top: 12px;
    font-weight: 500;
  }
`;
const FooterLogo = styled.div`
  margin-top: 12px;
  display: flex;
  ${device.laptop} {
    justify-content: center;
    transform: scale(0.8);
  }
  ${device.tablet} {
    justify-content: center;
    margin-bottom: 16px;
    transform: scale(1);
  }
  img {
    height: 125px;
    margin-right: 8px;
  }
`;
//copyright styles
const CopyRightWrapper = styled.div`
  width: 100%;
  background-color: #000a1e;
`;
const CopyRight = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;
export default Footer;
