import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Wrapper } from "./Foundation";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [closed, setIsClosed] = useState(true);
  return (
    <>
      <SidebarContainer>
        <SidebarHeading>
          <SidebarHeadingContainer>Filter courses by</SidebarHeadingContainer>
          <SearchIcon />
        </SidebarHeading>
        <SidebarContent onClick={() => setIsClosed(!closed)}>
          Exams
          {closed && (
            <KeyboardArrowDownIcon onClick={() => setIsClosed(!closed)} />
          )}
          {!closed && (
            <KeyboardArrowUpIcon onClick={() => setIsClosed(!closed)} />
          )}
        </SidebarContent>
        {!closed && (
          <Dropdown>
            <ViewP>
              <ViewLink to="/course/icar">ICAR</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/course/gate">GATE</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/course/gdjsv">GDJSV</ViewLink>
            </ViewP>
            <ViewP>
              <ViewLink to="/course/nsuid">NSUID</ViewLink>
              <ViewAll href="/course/dashboard">See All</ViewAll>
            </ViewP>
          </Dropdown>
        )}
        <SidebarLine></SidebarLine>
        <SidebarContent>
          Topic
          <KeyboardArrowDownIcon />
        </SidebarContent>
        <SidebarLine></SidebarLine>
        <SidebarContent>View All</SidebarContent>
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled(Wrapper)`
  height: inherit;
  /* min-width: 364px; */
  width: 100%;
  background: #e8f3ff;
  padding: 32px 32px 0px;
`;

const SidebarHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const SidebarHeadingContainer = styled.p`
  font-size: 20px;
  line-height: 30px;
`;

const SidebarContent = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarLine = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: black;
  margin-top: 20px;
`;

const Dropdown = styled.div`
  margin-left: 10px;
  margin-top: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #7a8188;
`;

const ViewAll = styled.a`
  text-decoration: none;
  color: #16a086;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  margin-right: 34px;
  width: 100%;
`;

const ViewP = styled.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ViewLink = styled(Link)`
  text-decoration: none;
  color: #7a8188;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export default Sidebar;
