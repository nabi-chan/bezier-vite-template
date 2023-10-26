import { AlphaStack, styled } from "@channel.io/bezier-react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
`;

export const Content = styled(AlphaStack).attrs({
  direction: "vertical",
  spacing: 6,
})`
  align-items: center;
  padding: 16px;
`;

export const Logo = styled.img``;
