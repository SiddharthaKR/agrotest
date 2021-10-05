import styled from "styled-components";
import Rating from "./Rating";

const PayCardMobile = (props) => {


    


  return (
    <CheckOut>
      <Img src="/images/checkout-placeholder.svg" alt="Title" />
      <Content>
        <h4 className="title">{props.title}</h4>
        <div><Rating value={props.rating} /> {props.studentsEnrolled}</div>
        <PriceTag>
        &#x20B9;
        <span>9,999</span>
      </PriceTag>
      </Content>
    </CheckOut>
  );
};

const CheckOut = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  max-width: 710px;
  max-height: 120px;
  padding: 4px 8px;
  margin-bottom: 1rem;
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
    font-size: 15px;
    line-height: 36px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
   display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const PriceTag = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
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

export default PayCardMobile;
