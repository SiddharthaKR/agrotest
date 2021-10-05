import styled from "styled-components";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

const Test = () => {
  return (
    <CheckOut>
      <Img src="/images/checkout-placeholder.svg" alt="Title" />
      <Content>
        <h4 className="title">Thermodynamics</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipi elit. Dese or sit amet
          consecte or sit amet consecte or sit amet consecte
        </p>
      </Content>
      <LiButtons>
        <p>Remove</p>
        <p>Save for later</p>
      </LiButtons>
      <PriceTag>
        &#x20B9;
        <span>9,999</span>
        <LocalOfferOutlinedIcon />
      </PriceTag>
    </CheckOut>
  );
};



const CheckOut = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  max-width: 710px;
  max-height: 120px;
  padding: 4px 8px;
  margin-bottom: 22px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;
const Img = styled.img`
  width: 150px;
  height: 120px;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 4px 12px;
  height: 120px;
  h4 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const LiButtons = styled.div`
  color: #17a388;
  align-self: end;
  p {
    text-align: right;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 8px;
    cursor: pointer;
  }
`;
const PriceTag = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
  font-weight: 700;
  color: #17a388;
  line-height: 28px;
  font-family: "Courier New", Courier, monospace;
  span {
    font-family: "Poppins", "Roboto", sans-serif;
    line-height: 28px;
    font-weight: 400;
  }
`;



export default Test;
