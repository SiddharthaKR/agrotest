import React from 'react'
import styled from "styled-components";
import Footer from '../global/Footer';
import Navbar from '../global/Navbar';
import Coursespecific from './Coursespecific';
import Sidebar from "./Sidebar";

function Coursenames({match}) {
    return (
        <>
            <Navbar/>
            <StyledLayout>
                <Sidebar/>
                <Coursespecific name={match.params.name.toUpperCase()}/>
            </StyledLayout>
            <Footer/>
        </>
    )
}


const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;


export default Coursenames
