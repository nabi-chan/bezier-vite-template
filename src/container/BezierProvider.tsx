import { ReactNode, useState } from "react";
import {
  BezierProvider as BaseBezierProvider,
  DarkFoundation,
  Foundation,
  LightFoundation,
} from "@channel.io/bezier-react";
import GlobalStyles from "@/styles/GlobalStyles";

interface BezierProviderProps {
  children: ReactNode;
}

function BezierProvider({ children }: BezierProviderProps) {
  const [foundation] = useState<Foundation>(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return DarkFoundation;
    }
    return LightFoundation;
  });

  return (
    <BaseBezierProvider foundation={foundation}>
      <GlobalStyles foundation={foundation} />
      {children}
    </BaseBezierProvider>
  );
}

export default BezierProvider;
