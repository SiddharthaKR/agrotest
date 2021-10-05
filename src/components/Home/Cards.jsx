import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
const CardData = [
  {
    img: "https://via.placeholder.com/336x248",
    heading: "Daily live classes",
    text: "Chat with educators, ask questions, answer live polls, and get your doubts cleared",
  },
  {
    img: "https://via.placeholder.com/336x248",
    heading: "Practice and revise",
    text: "Chat with educators, ask questions, answer live polls, and get your doubts cleared",
  },
  {
    img: "https://via.placeholder.com/336x248",
    heading: "Learn anytime,anywhere",
    text: "Chat with educators, ask questions, answer live polls, and get your doubts cleared",
  },
];

const Cards = () => {
  return (
    <Wrapper>
      <StyledCards>
        {CardData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </StyledCards>
    </Wrapper>
  );
};

const Card = ({ item }) => {
  return (
    <StyledCard>
      <img src={item.img} alt="" />
      <>
        <CardHeader>{item.heading}</CardHeader>
        <Text>{item.text}</Text>
      </>
    </StyledCard>
  );
};

const Wrapper = styled.section`
  background: white;
  margin-bottom: 5rem;
`;

const StyledCards = styled(Container)`
  min-height: 32rem;
  color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 21rem;
  margin: 4rem 2rem 0rem 2rem;
  ${device.laptopL} {
    margin: 4rem 1rem 0rem 1rem;
  }
  img {
    width: 21rem;
    height: 15.5rem;
    object-fit: cover;
  }
`;

const CardHeader = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-top: 28px;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 16px;
`;

export default Cards;
