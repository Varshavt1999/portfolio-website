import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { transition1 } from "../../constants/Transitions";
// images
import Html from "../../assets/images/html.png";
import Css from "../../assets/images/css.png";
import Js from "../../assets/images/js.png";
import ReactJs from "../../assets/images/react.png";
import Mui from "../../assets/images/mui.png";
import Git from "../../assets/images/git.png";
import Figma from "../../assets/images/figma.png";
import Bootstrap from "../../assets/images/bootstrap.png";
import Sass from "../../assets/images/sass.png";
import Python from "../../assets/images/python.png";
import Redux from "../../assets/images/redux.png";
import shadCn from "../../assets/images/shadCn.png";
// constants
import { colors } from "../../constants/Colors";
import { CursorContext } from "../../context/Store";

function Qualifications() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      img: Html,
    },
    {
      id: 2,
      name: "CSS3",
      img: Css,
    },
    {
      id: 3,
      name: "Javascript",
      img: Js,
    },
    {
      id: 4,
      name: "React JS",
      img: ReactJs,
    },
    {
      id: 5,
      name: "Material UI",
      img: Mui,
    },
    {
      id: 6,
      name: "Git",
      img: Git,
    },
    {
      id: 7,
      name: "Figma",
      img: Figma,
    },
    {
      id: 8,
      name: "Redux",
      img: Redux,
    },
    {
      id: 9,
      name: "Bootstrap",
      img: Bootstrap,
    },
    {
      id: 10,
      name: "Sass",
      img: Sass,
    },
    {
      id: 11,
      name: "Python",
      img: Python,
    },
    {
      id: 12,
      name: "shadCn",
      img: shadCn,
    },
  ];
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <MainContainer
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="wrapper">
        <Title
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          Skills & Experiences
        </Title>
        <InnerContainer>
          <LeftBox>
            {skills.map((item) => (
              <Skill
                key={item.id}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <SkillImage>
                  <ImageBox>
                    <img src={item.img} alt="skill" />
                  </ImageBox>
                </SkillImage>
                <Name>{item.name}</Name>
              </Skill>
            ))}
          </LeftBox>
          <RightBox
          // initial={{ opacity: 0, y: "-80%" }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: "-80%" }}
          // transition={transition1}
          >
            <Experiences>
              <ExperienceBox
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <Designation>
                  Software Engineer <span>@Citrus Informatics</span>
                </Designation>
                <Duration>June 2023 - Present</Duration>
              </ExperienceBox>
              <ExperienceBox
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <Designation>
                  Software Engineer <span>@Talrop</span>
                </Designation>
                <Duration>March 2022 - June 2023</Duration>
              </ExperienceBox>
              <ExperienceBox
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <Designation>
                  Software Engineer Intern <span>@Steyp Private Limited</span>
                </Designation>
                <Duration>September 2021 - March 2022</Duration>
              </ExperienceBox>
            </Experiences>
          </RightBox>
        </InnerContainer>
      </div>
    </MainContainer>
  );
}
const MainContainer = styled(motion.div)`
  min-height: 100vh;
  padding-top: 140px;
  & .wrapper {
    height: 100%;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  font-family: "dm_sansbold";
  margin-bottom: 80px;
  text-align: center;
  @media all and (max-width: 1080px) {
    margin-bottom: 60px;
  }
  @media all and (max-width: 980px) {
    font-size: 26px;
    margin-bottom: 50px;
  }
  @media all and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  @media all and (max-width: 768px) {
    gap: 45px;
  }
  @media all and (max-width: 480px) {
    gap: 40px;
  }
`;
const LeftBox = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 40px;
  @media all and (max-width: 1280px) {
    grid-gap: 30px;
  }
  @media all and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;
const Skill = styled.div``;
const SkillImage = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(104, 150, 177, 0.3);
  margin-bottom: 5px;
  @media all and (max-width: 1280px) {
    width: 80px;
    height: 80px;
  }
  @media all and (max-width: 980px) {
    width: 70px;
    height: 70px;
  }
  @media all and (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
  @media all and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
const ImageBox = styled.div`
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media all and (max-width: 1080px) {
    width: 45%;
  }
`;
const Name = styled.h3`
  font-size: 14px;
  font-family: "dm_sansregular";
  text-align: center;
  color: ${colors.text_grey};
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
`;
const RightBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  @media all and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    justify-content: flex-start;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;
const Experiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ExperienceBox = styled.div``;
const Designation = styled.div`
  font-size: 18px;
  font-family: "dm_sansbold";
  margin-bottom: 10px;
  & span {
    color: #739cc6;
  }
  @media all and (max-width: 1080px) {
    font-size: 17px;
  }
  @media all and (max-width: 980px) {
    font-size: 16px;
  }
`;
const Duration = styled.div`
  font-size: 16px;
  font-family: "dm_sansmedium";
  color: ${colors.text_grey};
  @media all and (max-width: 1080px) {
    font-size: 15px;
  }
  @media all and (max-width: 980px) {
    font-size: 14px;
  }
`;
export default Qualifications;
