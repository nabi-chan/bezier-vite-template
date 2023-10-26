# [Bezier Design System](https://github.com/channel-io/bezier-react/tree/main/packages/bezier-react) + [Vite](https://vitejs.dev)

Bezier Design System + Vite TypeScript React starter template.

## Usage

```tsx
import {
  Icon,
  IconSize,
  Text,
  Typography,
  AlphaStack,
} from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";

function App() {
  return (
    <AlphaStack direction="vertical" spacing={8}>
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
    </AlphaStack>
  );
}
```

## Installation

### Requirements

- nodeJS : `18` | `20`
- pnpm : `8` _or you can use another package manager_

### install dependencies

```bash
$ pnpm install
```

### run development server

```bash
$ pnpm dev
```

### build project

```bash
$ pnpm build
```

## See More

- [Bezier React Repo](https://github.com/channel-io/bezier-react/tree/main/packages/bezier-react)
- [Bezier React Storybook](https://main--62bead1508281287d3c94d25.chromatic.com)
- [Vite Docs](https://vitejs.dev/guide)
