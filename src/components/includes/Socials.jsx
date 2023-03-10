import React, { useContext } from "react";
import styled from "styled-components";
// icons
import { ImGithub, ImLinkedin, ImInstagram, ImWhatsapp } from "react-icons/im";
import { CursorContext } from "../../context/Store";
function Socials() {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <MainContainer>
            <SocialItem>
                <a
                    href="https://www.linkedin.com/in/varsha-v-t/"
                    target="_blank"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <ImLinkedin className="social-icon" />
                </a>
            </SocialItem>
            <SocialItem>
                <a
                    href="https://github.com/Varshavt1999"
                    target="_blank"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <ImGithub className="social-icon" />
                </a>
            </SocialItem>
            <SocialItem>
                <a
                    href="https://www.instagram.com/________varsha_v_t________/"
                    target="_blank"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <ImInstagram className="social-icon" />
                </a>
            </SocialItem>
            <SocialItem>
                <a
                    href="https://wa.me/9446628366/"
                    target="_blank"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <ImWhatsapp className="social-icon" />
                </a>
            </SocialItem>
        </MainContainer>
    );
}
const MainContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    @media all and (max-width: 1080px) {
        gap: 10px;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const SocialItem = styled.li`
    & .social-icon {
        font-size: 15px;
    }
`;
export default Socials;
