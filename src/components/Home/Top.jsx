import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Button } from "../global/Global";

const Top = () => {
  return (
    <>
      <HeroSection className="flex flex-jcse flex-aic">
        <div>
          <HeaderText>
            INDIA’S FIRST AGRICULTURAL EDUCATIONAL PLATFORM
          </HeaderText>
          <Tagline>Study from top educators</Tagline>
          <Link to="/signup">
            <Button1 primary>Sign up for Live Classes</Button1>
          </Link>
        </div>
        <HeroImage src="/images/heroimage.jpg" alt="Agrivision 4U" />
      </HeroSection>
      <Container></Container>
    </>
  );
};

const HeroSection = styled(Container)`
  min-height: 25rem;
`;
const HeaderText = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  max-width: 33.75rem;
`;
const Tagline = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`;
const HeroImage = styled.img`
  max-width: 100%;
`;
const Button1 = styled(Button)`
  margin-top: 1rem;
`;
export default Top;
