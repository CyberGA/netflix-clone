import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  cursor: pointer;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16;
  text-align: center;
`;

export const Item = styled.li`
  max-width: 200px;
  max-height: 200px;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid #fff;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
