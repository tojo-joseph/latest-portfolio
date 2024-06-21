import { useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import { useCardStore } from "../../../../utils/context/store";

type Props = {
  children: ReactNode;
  id: string;
  handleProjectLink: () => void;
};

export const ProjectTitle = ({ children, id, handleProjectLink }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewCard = useCardStore((state) => state.setInViewCard);
  const inViewCard = useCardStore((state) => state.inViewCard);

  useEffect(() => {
    if (isInView) setInViewCard(id);
    if (!isInView && inViewCard === id) setInViewCard(null);
  }, [isInView, id, setInViewCard, inViewCard]);

  console.log("isInView", isInView, children);

  return (
    <p
      ref={ref}
      style={{
        paddingBottom: "16px",
        transition: "color 0.3s",
        cursor: "pointer",
      }}
      onClick={handleProjectLink}
      className={isInView ? "text-white" : "text-gray"}
    >
      {children}{" "}
    </p>
  );
};
