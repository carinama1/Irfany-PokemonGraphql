import styled from "@emotion/styled";

export const Tag = ({ children, type }) => {
  let background = "#46A2DA";
  let color = "white";
  switch (type) {
    case "grass":
      background = "#7cfc00";
      color = "black";
      break;
    case "poison":
      background = "#7f01fe";
      break;
    case "fire":
      background = "#ff0000";
      break;
    case "flying":
      background = "#c3fbf9";
      color = "black";
      break;
    default:
      break;
  }

  const TagWrapper = styled.div`
    padding: 12px 24px;
    background: ${background};
    border-radius: 24px;
    margin: 10px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
    font-size: 1rem;
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
    color: ${color};
  `;

  return <TagWrapper>{children}</TagWrapper>;
};

export const StickyComponent = ({ children }) => {
  const Wrapper = styled.div`
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: center;
  `;

  return <Wrapper>{children}</Wrapper>;
};

export const PokeBald = ({ children }) => {
  const PokeBallStyle = styled.div`
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 20px 20px 16px;
    position: relative;
    border-radius: 50%;
    animation: spin linear 2s infinite;
    background-image: -moz-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -moz-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    background-image: -webkit-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -webkit-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    @media (max-width: 600px) {
      width: 50px;
      height: 50px;
    }
    ::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 6;
      width: 10%;
      height: 10%;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #aaa, 0 0 0 10px #fff, 0 0 0 16px #3f3f3f;
      margin: 45%;
      @media (max-width: 600px) {
        box-shadow: 0 0 0 1px #aaa, 0 0 0 2px #fff, 0 0 0 4px #3f3f3f;
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
  `;
  return <PokeBallStyle>{children}</PokeBallStyle>;
};

export const PokeBall = ({ children }) => {
  const PokeBallStyle = styled.div`
    width: 160px;
    height: 160px;
    display: inline-block;
    margin: 20px 20px 16px;
    position: relative;
    border: 6px solid black;
    cursor: pointer;
    border-radius: 50%;
    background-image: -moz-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -moz-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    background-image: -webkit-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -webkit-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    @media (max-width: 600px) {
      width: 85px;
      height: 85px;
      border: 4px solid black;
    }
    :hover {
      animation: shak 0.3s infinite;
      margin-bottom: 20px;
    }
    ::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 6;
      width: 20%;
      height: 20%;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #aaa, 0 0 0 10px #fff, 0 0 0 16px #3f3f3f;
      margin: 40%;
      @media (max-width: 600px) {
        box-shadow: 0 0 0 1px #aaa, 0 0 0 4px #fff, 0 0 0 8px #3f3f3f;
      }
    }
    ::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 1;
      width: 94%;
      height: 10%;
      background-color: rgba(0, 0, 0, 0);
      margin: 45% 3%;
      box-shadow: 12px 0 0 #fff, -12px 0 0 #fff;
      @media (max-width: 600px) {
        box-shadow: 8px 0 0 #fff, -8px 0 0 #fff;
      }
    }
    @keyframes shak {
      0%,
      100% {
        -webkit-transform: rotate(-5deg);
      }
      50% {
        -webkit-transform: rotate(5deg);
      }
    }
  `;
  return <PokeBallStyle>{children}</PokeBallStyle>;
};

export const PokeCatch = ({ children }) => {
  const PokeBallStyle = styled.div`
    width: 220px;
    height: 220px;
    display: inline-block;
    margin: 20px 20px 16px;
    position: relative;
    border-radius: 50%;
    animation: spin linear 2s infinite;
    background-image: -moz-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -moz-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    background-image: -webkit-radial-gradient(
        40% 40%,
        circle,
        rgba(0, 0, 0, 0.1) 40%,
        rgba(0, 0, 0, 1) 100%
      ),
      -webkit-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
            55%);
    @media (max-width: 600px) {
      width: 120px;
      height: 120px;
    }
    ::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 6;
      width: 10%;
      height: 10%;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 1px #aaa, 0 0 0 10px #fff, 0 0 0 16px #3f3f3f;
      margin: 45%;
      @media (max-width: 600px) {
        box-shadow: 0 0 0 1px #aaa, 0 0 0 2px #fff, 0 0 0 4px #3f3f3f;
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
  `;
  return <PokeBallStyle>{children}</PokeBallStyle>;
};
