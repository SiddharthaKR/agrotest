import { Wrapper } from "./Foundation";
import styled from "styled-components";
import Card from "./Card";
const ContentlayOut = () => {
  return (
    <CardWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardWrapper>
  );
};
const CardWrapper = styled(Wrapper)`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default ContentlayOut;
