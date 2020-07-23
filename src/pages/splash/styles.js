import styled from "styled-components";

const PageContainer = styled.div`
  min-width: 400px;

  .modal-overlay {
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 10;
    // width: 100%;
    // height: 100%;
    // background-color: red;
    // opacity: 0.6;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .modal-wrapper {
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 10;
    // width: 100%;
    // height: 100%;
    // overflow-x: hidden;
    // overflow-y: auto;
    // outline: 0;
  }

  .modal {
    // z-index: 100;
    // background: white;
    // position: relative;
    // margin: 1.75rem auto;
    // border-radius: 3px;
    // max-width: 1200px;
    // padding: 2rem;

    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
    ${(props) => props.mb && `margin-bottom: ${props.mb};`}
    &:hover {
      transform: scale(1.02);
    }
  }

  //inplayer styles below here

  .inplayer-paywall {
    width: 100%;
    color: #fff;

    .brandheader {
      display: none;
    }

    .preview-text {
      color: #fff;
      position: absolute;
      bottom: -30px;
      width: 100%;
      text-align: center;
    }
  }

  .preview-frame {
    > div {
      position: relative;
      // overflow: hidden;
      // padding-top: 56.25%;
    }

    .inplayer-preview-box {
      padding: 0px;
      border: none;
    }

    .iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const NavSection = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Banner = styled.div`
  width: 100%;
  height: 8px;
  background: #598cc0;
`;

const NavBar = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  div img {
    height: 42px;
  }

  @media (max-width: 900px) {
    div img {
      height: 32px;
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  position: relative;
`;

const Button = styled.button`
  background: white;
  color: black;
  border: 2px solid black;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s ease;
  ${(props) => props.mb && `margin-bottom: ${props.mb};`}
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 0 8px;
  }
`;

const TitleSection = styled.div`
  padding: 32px 0;
  //   height: 500px;

  //   @media (max-width: 900px) {
  //     height: 250px;
  //   }

  h2 {
    max-width: 575px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 36px;
    font-weight: bold;
    line-height: 38px;

    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
`;

const VidContainer = styled.div`
  padding-top: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  //   @media (max-width: 900px) {
  //     position: absolute;
  //     left: 10%;
  //     right: 10%;
  //   }
`;

const VidSection = styled.div`
  //   height: 340px;
  //   position: relative;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  //   @media (max-width: 900px) {
  //   }
`;

const Featuring = styled.div`
  width: 100%;
  background: #e98956;
  //   padding-top: 72px;
  padding: 32px 0px;

  h2 {
    font-size: 32px;
  }

  @media (max-width: 900px) {
    h5 {
      margin-bottom: 0;
    }
  }
`;

const HeadShot = styled.img`
  width: 275px;
  height: auto;

  @media (max-width: 900px) {
    width: 120px;
  }
`;

const HeadShotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
`;

const ProfileContainer = styled.div`
  text-align: center;

  h5 {
    margin-top: 16px;
    font-size: 24px;
    padding: 0 8px;
  }
  p {
    margin-top: 0;
    font-size: 16px;
    padding-bottom: 16px;
  }
`;

const HostedSection = styled.div`
  background: black;
  padding: 32px 0px;

  h2 {
    color: #f0f0f0;
    margin-bottom: 32px;
  }

  h5 {
    color: #f0f0f0;
  }
`;

const Description = styled.div`
  margin: 32px 0 42px 0;

  h2 {
    margin-bottom: 32px;
  }

  ul {
    max-width: 750px;
    text-align: justified;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ShowTime = styled.div`
  background: #8c6295;
  padding 32px 0;
  

  @media (max-width: 900px) {
    padding: 16px;

    p{
        font-size: 24px;
    }
  }

  h2 {
      font-size: 38px;
  }

`;

const TimeUs = styled.div`
  width: 400px;
  font-size: 32px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

const TimeOz = styled.div`
  width: 400px;
  font-size: 32px;
  margin-right: 0;
  align-self: flex-end;
  tex-align: right;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

const ShowContent = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const FaqSection = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 38px 16px 38px 16px;

  h2 {
    font-size: 32px;
  }
`;

const FaqContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  h2 {
    width: 100%;
  }
`;

const ColumnOne = styled.div`
  max-width: 300px;
  width: 50%;
  padding-right: 8px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;

const ColumnTwo = styled.div`
  width: 50%;
  max-width: 300px;
  padding-left: 8px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;

const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;

  h4 {
    color: #f0f0f0;
  }

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: red;
  }

  @media (max-width: 900px) {
    img {
      height: 32px;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

export {
  Banner,
  ContentContainer,
  Button,
  NavBar,
  TitleSection,
  VidContainer,
  Featuring,
  HeadShot,
  HeadShotContainer,
  ProfileContainer,
  HostedSection,
  Description,
  ShowTime,
  TimeUs,
  TimeOz,
  ShowContent,
  FaqSection,
  FaqContainer,
  ColumnOne,
  ColumnTwo,
  Footer,
  PageContainer,
  VidSection,
  NavSection,
};
