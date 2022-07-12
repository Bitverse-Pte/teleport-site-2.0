import styled from 'styled-components'

export const FooterStyled = styled.div`
  background: #f8fafc;
  padding: 50px 0 25px;
  width: 100%;

  .wrapFooter {
    max-width: 1132px;
    margin: 0 auto;
    width: 55%;
    min-width: 802px;
    .imgLogoHorizontal {
      height: 7rem;
    }

    @media (max-width: 900px) {
      & {
        width: 80%;
        .flexTop {
          flex-direction: row;
        }
      }
    }

    @media (max-width: 600px) {
      & {
        width: 86%;
        text-align: center;
        .flexTop {
          flex-direction: column;
        }
      }

      .wrapLinks {
        display: none;
      }
    }

    .lineFooter {
      height: 1px;
      transform: scaleY(0.5);
      background-color: black;
      margin: 20px 0;
      opacity: 0.3;
    }

    .textCopyright {
      font-size: 1.6rem;
      color: #05050e;
      font-family: Poppins;
      line-height: 2.4rem;
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
          font-size: 2.4rem;
          line-height: 7rem;
          color: #05050e;
        }

        a {
          font-family: Poppins;
          font-style: normal;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.7rem;
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
