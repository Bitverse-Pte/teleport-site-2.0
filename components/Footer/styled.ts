import styled from "styled-components";

export const FooterStyled = styled.div`
  background: #F8FAFC;
  padding: 50px 0 25px;
  
  .wrapFooter {
    margin: 0 auto;

    .imgLogoHorizontal {
      height: 70px;
    }

    .lineFooter {
      height: 1px;
      background-color: black;
      margin: 20px 0;
      opacity: 0.3;
    }

    .textCopyright {
      font-size: 16px;
      color: #05050E;
      font-family: Poppins;
      line-height: 24px;
    }
    
    .wrapLinks {
      width: 60%;

      .wrapColumn {
        margin-left: 20%;
        margin-bottom: 10px;

        .textTitle {
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 32px;
          color: #05050E;
          margin-bottom: 24px;
        }

        a {
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #000000;
          margin-bottom: 16px;

          &:hover {
            font-weight: 800;
          }
        }

      }
    }
    
  }

`
