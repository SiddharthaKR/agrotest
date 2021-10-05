import styled from "styled-components";
import device from "../Util/MediaQuery";

const Carouselitem = () => {
  return (
    <Container>
      <img src="/images/carousel-img-1.svg" alt="" />
      <h2>Cultivating ideas for your growth</h2>
      <h3>India's first Agri e-learning platform</h3>
    </Container>
  );
};
const Container = styled.div`
  padding: 12px;
  img {
    width: 100%;
  }
  h2,
  h3 {
    text-transform: uppercase;
    color: #0e6656;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    ${device.laptopL} {
      font-size: 24px;
    }
    ${device.laptop} {
      font-size: 22px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    ${device.laptopL} {
      font-size: 18px;
    }
    ${device.laptop} {
      font-size: 16px;
    }
  }
`;
export default Carouselitem;
