import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { transition1 } from "../../constants/Transitions";
// constants
import { colors } from "../../constants/Colors";
import { CursorContext } from "../../context/Store";
// images
import Guester from "../../assets/images/guester.png";
import RealEstate from "../../assets/images/real-estate.png";
import BudgetCalc from "../../assets/images/budget-calculator.png";
import Coffee from "../../assets/images/coffe-website.png";
import HeartTrail from "../../assets/images/heart-trail-animation.png";
import RandomColor from "../../assets/images/random-color-generator.png";

// icons
import { VscGithubAlt } from "react-icons/vsc";
import {
    TbWindowMaximize,
    //  TbWorld, TbWorldWww
} from "react-icons/tb";

function Projects() {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const projects = [
        {
            id: 1,
            img: Guester,
            heading: "Guester",
            siteLink: "https://guester-app.talrop.works/",
            technologies: [
                "React",
                "Styled-components",
                "REST API",
                "Context API",
                "Authentication",
                "Geo Location",
                "React Hooks",
                "Router",
            ],
            description:
                "This application provides all the information about the best affordable and delectable food around us.",
        },
        {
            id: 2,
            img: RealEstate,
            heading: "Real Estate",
            github: "https://github.com/Varshavt1999/react-real-estate",
            siteLink: "https://realestatevarshavt.netlify.app",
            technologies: ["React", "Styled Components"],
            description: "Real Estate ui project",
        },
        {
            id: 3,
            img: BudgetCalc,
            heading: "Budget Calculator",
            github: "https://github.com/Varshavt1999/budget-calculator",
            siteLink: "https://varshavt-budget-calculator.netlify.app",
            technologies: ["React", "Styled Components", "React Hooks"],
            description: "Budget Calculator using react",
        },
        {
            id: 4,
            img: HeartTrail,
            heading: "Heart Trail Animation",
            github: "https://github.com/Varshavt1999/heart-trail-animation",
            siteLink: "https://heart-trailanimation.netlify.app",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Heart Animation based on cursor movement using js",
        },
        {
            id: 5,
            img: RandomColor,
            heading: "Random color generator",
            github: "https://github.com/Varshavt1999/Random-color-generator",
            siteLink: "https://varshavt-random-color-generator.netlify.app",
            technologies: ["HTML", "CSS", "JavaScript"],
            description:
                "Random color generator on page load using html,css and js",
        },
        {
            id: 6,
            img: Coffee,
            heading: "Coffee website",
            github: "https://github.com/Varshavt1999/coffee-website",
            siteLink: "https://varshavt-coffee-website.netlify.app",
            technologies: ["HTML", "CSS"],
            description: "Responsive Coffe website ui using html css",
        },
    ];
    return (
        <MainContainer
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
        >
            <div className="wrapper">
                <Title>Some Things I've Built</Title>
                <ListContainer>
                    {projects.map((project, index) => (
                        <ListItem key={index}>
                            <LeftContainer
                                onMouseEnter={mouseEnterHandler}
                                onMouseLeave={mouseLeaveHandler}
                            >
                                <WorkImageBox
                                    href={project.siteLink}
                                    target="_blank"
                                >
                                    <img src={project.img} alt="work" />
                                </WorkImageBox>
                            </LeftContainer>
                            <RightContainer>
                                <AboutProject
                                    onMouseEnter={mouseEnterHandler}
                                    onMouseLeave={mouseLeaveHandler}
                                >
                                    <TopContainer>
                                        <ProjectName>
                                            {project.heading}
                                        </ProjectName>
                                    </TopContainer>
                                    <p>{project.description}</p>
                                    <BottomContainer>
                                        <Technologies className="technologies">
                                            {project.technologies.map(
                                                (technology, index) => (
                                                    <Technology key={index}>
                                                        {technology}
                                                    </Technology>
                                                )
                                            )}
                                        </Technologies>
                                        <SiteLinks className="site-links">
                                            {project.github && (
                                                <SiteLink
                                                    href={project.github}
                                                    target="_blank"
                                                >
                                                    <VscGithubAlt className="site-icon" />
                                                </SiteLink>
                                            )}
                                            <SiteLink
                                                href={project.siteLink}
                                                target="_blank"
                                            >
                                                <TbWindowMaximize className="site-icon" />
                                            </SiteLink>
                                        </SiteLinks>
                                    </BottomContainer>
                                </AboutProject>
                            </RightContainer>
                        </ListItem>
                    ))}
                </ListContainer>
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
    font-size: 34px;
    font-family: "dm_sansbold";
    margin-bottom: 20px;
    @media all and (max-width: 1080px) {
        margin-bottom: 20px;
        font-size: 32px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 0;
        font-size: 28px;
    }
    @media all and (max-width: 768px) {
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 22px;
    }
`;
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    @media all and (max-width: 980px) {
        gap: 50px;
    }
    @media all and (max-width: 480px) {
        gap: 70px;
    }
`;
const ListItem = styled.div`
    display: grid;
    grid-template-columns: 1.8fr 1.5fr;
    place-items: center;
    padding: 40px 0;
    &:nth-child(2n) {
        direction: rtl;
        & .technologies {
            direction: initial;
            justify-content: start;
        }
        & .site-links {
            direction: initial;
            justify-content: start;
        }
    }
    @media all and (max-width: 980px) {
        grid-template-columns: 0.8fr;
        gap: 50px;
    }
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`;
const LeftContainer = styled.div`
    border: 1px solid #000;
`;
const WorkImageBox = styled.a`
    overflow: hidden;
    transition: all ease-in 0.3s;
    cursor: pointer;
    height: 100%;
    & img {
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        & img {
            transition: all ease-in 0.3s;
            transform: scale(1.15);
        }
    }
`;
const RightContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;
const TopContainer = styled.div`
    position: absolute;
    right: 0;
    width: 100%;
    bottom: 100%;
    display: flex;
    justify-content: end;
`;
const ProjectName = styled.h3`
    color: #000;
    font-size: 20px;
    font-family: "dm_sansmedium";
    margin-bottom: 15px;
    @media all and (max-width: 1080px) {
        margin-bottom: 10px;
    }
    @media all and (max-width: 480px) {
        font-size: 18px;
    }
`;
const AboutProject = styled.div`
    background-color: ${colors.primary_bg};
    padding: 20px;
    width: 100%;
    height: 60%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & p {
        color: #000;
        font-size: 16px;
        font-family: "dm_sansmedium";
        width: 70%;
        margin: 0 auto;
        @media all and (max-width: 480px) {
            width: 100%;
            font-size: 14px;
        }
    }
    @media all and (max-width: 1080px) {
        height: 72%;
    }
    @media all and (max-width: 980px) {
        height: 100%;
        padding: 40px;
    }
    @media all and (max-width: 768px) {
        padding: 30px;
    }
    @media all and (max-width: 640px) {
        padding: 25px;
    }
`;
const BottomContainer = styled.div`
    padding: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
`;
const Technologies = styled.ul`
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 20px;
    margin-bottom: 10px;
    @media all and (max-width: 1080px) {
        row-gap: 5px;
    }
    @media all and (max-width: 480px) {
        column-gap: 10px;
    }
`;
const Technology = styled.li`
    font-size: 14px;
    font-family: "dm_sansbold";
    color: ${colors.primary_black};
    width: fit-content;
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const SiteLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
`;
const SiteLink = styled.a`
    cursor: pointer;
    & .site-icon {
        font-size: 20px;
        @media all and (max-width: 1080px) {
            font-size: 18px;
        }
        @media all and (max-width: 480px) {
            font-size: 16px;
        }
    }
`;

export default Projects;
