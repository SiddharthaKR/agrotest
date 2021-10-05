import styled from "styled-components";
import Sidebar from "./Sidebar";
// import Foundation from "./Foundation";
import ContentlayOut from "./ContentLayOut";

export const Layout = () => {
  return (
    <>
      <StyledLayout>
        <Sidebar />
        {/* <Foundation /> */}
        <ContentlayOut />
      </StyledLayout>
    </>
  );
};
const StyledLayout = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: 93vh;
  }
`;
export default Layout;
