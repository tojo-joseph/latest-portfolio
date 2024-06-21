import React, { useEffect, useState } from "react";
import "./testimonials.scss";
import Testimonial from "./Testimonial/testimonial";
import TestPic from "../../assets/images/test-pic.png";
import CompanyPic from "../../assets/images/company-pic.png";
import { get } from "../../../utils/api";

function Testimonials() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  const testimonials = [
    {
      _id: "0",
      content:
        "I am pleased to recommend Tojo, who has been an invaluable asset to Delnie for close to 2 years now. Tojo is a very dedicated person and a quick learner, proving his efficiency in a very short span of time. With his expertise in React.js, he has done an excellent job developing the FavHiker admin panel from scratch. Additionally, Tojo has worked extensively on the backend, gaining a complete understanding of backend infrastructure. His ability to handle several other projects and manage clients directly has been impressive. Tojo's contributions have been pivotal to our success, and I highly recommend him for any challenging role.",
      author_img_url:
        "https://res.cloudinary.com/tojo-joseph/image/upload/v1712573308/christo_img_b0g9z5.png",
      author_name: "Christo John",
      author_designation: "Managing Director, Delnie Pvt. Ltd",
      authorCompanyImgUrl: "",
      testimonialId: 0,
    },
    {
      _id: "1",
      content:
        "Throughout his time working under my supervision, He has consistently demonstrated exceptional qualities that have contributed to his success as a frontend developer.\n\nOne of the most admirable traits Tojo possesses is his never-give-up spirit. Regardless of the challenges encountered during projects, he always approaches them with determination and resilience.\n\nIn addition to his technical prowess, he also has good communication skills and consistently upholds a strong work ethic. He approaches every task with dedication, attention to detail, and a commitment to delivering high-quality results.\n\nIn conclusion, Tojo has proven to be a good asset to our team, embodying the qualities of perseverance, communication, and work ethic. I have no doubt that he will continue to thrive and make significant contributions in his future endeavors.",
      author_img_url:
        "https://res.cloudinary.com/tojo-joseph/image/upload/v1712573679/shamaiel_img_yttjrq.png",
      author_name: "Shamaiel Khan",
      author_designation: "Senior Software Developer, Capgemini",
      authorCompanyImgUrl: "",
      testimonialId: 1,
    },
    {
      _id: "2",
      content:
        "He is a dedicated full-stack developer who stands out for his unwavering sincerity and exceptional cooperation. His ability to seamlessly integrate front-end and back-end components has been crucial in delivering robust and user-friendly solutions, making him an invaluable asset to our team.",
      author_img_url:
        "https://res.cloudinary.com/tojo-joseph/image/upload/v1718983407/Rectangle_1_jfcgcf.png",
      author_name: "Ashwini Kale",
      author_designation: "SDE 2, Delnie Pvt. Ltd",
      authorCompanyImgUrl: "",
      testimonialId: 2,
    },
    {
      _id: "3",
      content:
        "Thrilled to recommend Tojo Joseph from our time together at Delnie! His front-end skills are top-notch, and he has a knack for translating complex designs into clean code. Plus, his positive attitude and constant learning keep him on top of the latest tech.",
      author_img_url:
        "https://res.cloudinary.com/tojo-joseph/image/upload/v1718976954/rajesh-img_ehdqre.jpg",
      author_name: "Rajesh Soram",
      author_designation: "UI/UX Designer, Delnie Pvt. Ltd",
      authorCompanyImgUrl: "",
      testimonialId: 3,
    },
  ];

  useEffect(() => {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner: any = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item: any) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const getTestimonials = async () => {
    try {
      const response = await get("testimonials", {});

      if (response) {
        console.log("response", response);

        setData(response.data.testimonials);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="testimonials">
      <div className="testimonials__header wrapper">
        <h3>COLLEAGUE TESTIMONIALS</h3>
        <h6>Hear what my colleagues have to say about me</h6>
      </div>
      <div
        className="testimonials__container wrapper scroller"
        data-direction="left"
        data-speed="slow"
      >
        <div className="scroller__inner">
          {testimonials.map((testimonial: any, index: any) => {
            return <Testimonial testimonial={testimonial} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
