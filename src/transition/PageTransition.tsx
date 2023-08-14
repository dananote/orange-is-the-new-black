import React, { ReactNode } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PageTransitionGroup, PageTransitionWrapper } from "./PagenationStyle";

interface PageTransitionProps {
  transitionKey: string;
  children: ReactNode;
}
const PageTransition: React.FC<PageTransitionProps> = ({
  transitionKey,
  children,
}) => {
  const timeout = 500;
  return (
    <PageTransitionGroup timeout={timeout}>
      <TransitionGroup>
        <CSSTransition
          key={transitionKey}
          classNames="slide"
          timeout={timeout}
          // unmountOnExit
          // mountOnEnter
        >
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </CSSTransition>
      </TransitionGroup>
    </PageTransitionGroup>
  );
};

export default PageTransition;
