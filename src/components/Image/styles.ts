import styled from "styled-components/native";

interface ImageProps {
  w: string;
  h: string;
}

export const Image = styled.Image<ImageProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;
