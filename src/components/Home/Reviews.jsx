import { useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { SubHeader } from "./Styles";
import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";

const data = [
  {
    reviewer: "John Doe, IIT Kanpur",
    review:
      "SLide1 ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tempor congue, nisl nisl consectetur nunc, eget congue nisl nisl eget nunc.",
    image: "https://via.placeholder.com/96",
  },
  {
    reviewer: "Naman Sharma, KIT Ajmer",
    review:
      "SLide2 ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tempor congue, nisl nisl consectetur nunc, eget conguenisl nisl eget nunc.",
    image: "https://via.placeholder.com/96",
  },
  {
    reviewer: "Reviewer Kapoor, MIT Pune",
    review:
      "SLide3 ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tempor congue, nisl nisl consectetur nunc, eget conguenisl nisl eget nunc.",
    image: "https://via.placeholder.com/96",
  },
];

const Review = ({ item }) => {
  return (
    <div className="embla__slide">
      <StyledReview className="flex flex-fdc flex-aic">
        <p>{item.review}</p>
        <div className="reviewer">
          <span>
            <strong>{item.reviewer}</strong>
          </span>
          <img src={item.image} alt="user" />
        </div>
      </StyledReview>
    </div>
  );
};

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
      setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <>
          {data.map((item, index) => (
            <Review key={index} item={item} />
          ))}
        </>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <Wrapper>
      <ReviewContainer>
        <SubHeader>Hear What Our Users Say</SubHeader>
        <ReviewSlider className="flex flex-aic flex-jcc">
          <EmblaCarousel />
        </ReviewSlider>
      </ReviewContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: white;
`;
const ReviewContainer = styled(Container)`
  min-height: 40rem;
  padding: 3rem 0;
  color: black;
  .embla {
    overflow: hidden;
    cursor: grab;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
  }
`;

const ReviewSlider = styled.div`
  max-width: 1100px;
  height: 25rem;
  box-shadow: 0px 0px 24px rgba(64, 64, 64, 0.1);
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
`;

const StyledReview = styled.div`
  width: 96%;
  max-width: 56.25rem;
  min-height: 15rem;
  justify-content: space-between;
  margin: auto;
  .reviewer {
    align-self: flex-end;
    display: flex;
    align-items: center;
    ${device.tablet} {
      align-self: center;
    }
  }
  img {
    border-radius: 50%;
    margin: 1rem;
  }
  ${device.tablet} {
    font-size: 1.125rem;
  }
`;
export default Reviews;
