import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  z-index: 9999;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  max-width: 900px;
  margin: auto;
`;
export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  color: #fff;
  width: 114px;
  height: 45px;
  border-radius: 5px;
  font-weight: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
    color: #fff;
    font-weight: bold;
  }
`;
