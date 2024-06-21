import React, { ReactNode } from "react";
import { useCardStore } from "../../../../../utils/context/store";
import Malayali from "../../../../assets/images/malayali_pc.png";
import MalayaliMobile from "../../../../assets/images/malayali_iphone.png";
import Acceron from "../../../../assets/images/acceron_pc.png";
import AcceronMobile from "../../../../assets/images/acceron_iphone.png";
import CloudAdmin from "../../../../assets/images/cloudadmin_pc.png";
import Favhiker from "../../../../assets/images/favhiker_pc.png";
import FavhikerMobile from "../../../../assets/images/favhiker_iphone.png";

type ImageCardProps = {
  gradient: string;
  children: ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const ImageCard = ({ gradient, children, id }: ImageCardProps) => {
  const inViewCard = useCardStore((state) => state.inViewCard);

  return (
    <div
      className={`w-100 h-100 position-absolute opacity-0 ${
        inViewCard === id ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "#FEB2B2",
        borderRadius: "16px",
        background: gradient,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transitionProperty: "opacity",
        transitionDuration: "0.3s",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export const MalayaliCard = ({ id }: CardProps) => {
  return (
    <ImageCard
      id={id}
      gradient="linear-gradient(to bottom right, #F5FBFF, #00D9D5)"
      //hsla(186, 66%, 40%, 1) 0%, hsla(188, 78%, 69%, 1) 100%
      //hsla(297, 59%, 34%, 1) 0%, hsla(345, 74%, 58%, 1) 50%, hsla(22, 87%, 56%, 1) 100%
      //hsla(14, 93%, 53%, 1) 0%, hsla(30, 84%, 58%, 1) 100%
    >
      <div>
        <img
          src={Malayali}
          alt=""
          style={{
            borderRadius: "6px",
            width: "60%",
            height: "30%",
            position: "absolute",
            left: "30%",
            bottom: "30%",
          }}
        />
        <img
          src={MalayaliMobile}
          alt=""
          style={{
            borderRadius: "6px",
            width: "27%",
            height: "27%",
            position: "absolute",
            left: "5%",
            bottom: "28%",
          }}
        />
      </div>
    </ImageCard>
  );
};

export const AcceronCard = ({ id }: CardProps) => {
  return (
    <ImageCard
      id={id}
      gradient="linear-gradient(to bottom right, #F7F0FF, #A78AFE)"
    >
      <div>
        <img
          src={Acceron}
          alt=""
          style={{
            borderRadius: "6px",
            width: "60%",
            height: "30%",
            position: "absolute",
            left: "30%",
            bottom: "30%",
          }}
        />
        <img
          src={AcceronMobile}
          alt=""
          style={{
            borderRadius: "6px",
            width: "27%",
            height: "27%",
            position: "absolute",
            left: "5%",
            bottom: "28%",
          }}
        />
      </div>
    </ImageCard>
  );
};

export const CloudAdminCard = ({ id }: CardProps) => {
  return (
    <ImageCard
      id={id}
      gradient="linear-gradient(to bottom right, #F7FFF5, #ADFFD8)"
    >
      <div>
        <img
          src={CloudAdmin}
          alt=""
          style={{
            borderRadius: "6px",
            width: "60%",
            height: "30%",
            position: "absolute",
            left: "30%",
            bottom: "30%",
          }}
        />
      </div>
    </ImageCard>
  );
};

export const FavhikerCard = ({ id }: CardProps) => {
  return (
    <ImageCard
      id={id}
      gradient="linear-gradient(to bottom right, #FEF5FF, #FFADE1)"
    >
      <div>
        <img
          src={Favhiker}
          alt=""
          style={{
            borderRadius: "6px",
            width: "60%",
            height: "30%",
            position: "absolute",
            left: "30%",
            bottom: "30%",
          }}
        />
        <img
          src={FavhikerMobile}
          alt=""
          style={{
            borderRadius: "6px",
            width: "17%",
            height: "25%",
            position: "absolute",
            left: "8%",
            bottom: "30%",
          }}
        />
      </div>
    </ImageCard>
  );
};
