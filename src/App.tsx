import { Icon, IconSize, Text, Typography } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import * as Styled from "@/App.styled";

function App() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          color="bgtxt-blue-normal"
        />
        <Text typo={Typography.Size24} bold>
          Bezier Design System + Vite
        </Text>
        <Text typo={Typography.Size16}>
          See{" "}
          <a
            href="https://main--62bead1508281287d3c94d25.chromatic.com/?path=/story/intro--page"
            target="_blank"
            rel="noopener"
          >
            Storybook
          </a>{" "}
          For more information.
        </Text>
      </Styled.Content>
    </Styled.Container>
  );
}

export default App;
