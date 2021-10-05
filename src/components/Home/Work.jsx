import { SubHeader } from "./Styles";
import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";

const data = [
  {
    image: "https://via.placeholder.com/448x308",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam veritatis laborum, ex aliquid commodi quis maxime tenetur doloribus nulla consequatur dolor laudantium voluptates pariatur autem odit. Dolores, dolor?",
  },
  {
    image: "https://via.placeholder.com/448x308",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam veritatis laborum, ex aliquid commodi quis maxime tenetur doloribus nulla consequatur dolor laudantium voluptates pariatur autem odit. Dolores, dolor?",
  },
  {
    image: "https://via.placeholder.com/448x308",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam veritatis laborum, ex aliquid commodi quis maxime tenetur doloribus nulla consequatur dolor laudantium voluptates pariatur autem odit. Dolores, dolor?",
  },
];
const Row = (props) => {
  return (
    <StyledRow index={props.index} className={"flex flex-jcsb flex-aic"}>
      <img src={props.image} alt="" />
      <div className="circle flex flex-aic flex-jcc">
        <span>{props.index}</span>{" "}
      </div>
      <div className="para">{props.text}</div>
    </StyledRow>
  );
};

const Work = () => {
  return (
    <Wrapper>
      <WorkContainer>
        <SubHeader>How AgriVision4U Works</SubHeader>
        {data.map((item, index) => (
          <Row
            key={index}
            index={index + 1}
            image={item.image}
            text={item.text}
          />
        ))}
      </WorkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #e8f3ff;
  margin: 2rem 0;
`;
const WorkContainer = styled(Container)`
  min-height: 1458px;
  padding-top: 3rem;
`;
const StyledRow = styled.div`
  padding: 3.5rem 1rem;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row-reverse" : "row")};
  img {
    max-width: 100%;
  }
  .para {
    max-width: 28rem;
    padding: 1rem;
    font-size: 1.125rem;
    ${device.laptop} {
      padding: 2rem 0;
    }
  }
  .circle {
    color: #fff;
    background: #16a086;
    font-size: 1.5rem;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    ${device.laptopL} {
      display: none;
    }
  }
  ${device.laptop} {
    flex-direction: column;
    margin: auto;
    padding: 1rem 1rem;
  }
`;
export default Work;
