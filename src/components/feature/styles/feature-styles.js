import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 152px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 590px;
  font-weight: 600;
  font-size: 57px;
  letter-spacing: -2px;
  line-height: 1.1;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
