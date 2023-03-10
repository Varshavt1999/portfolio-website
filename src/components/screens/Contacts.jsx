import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { transition1 } from "../../constants/Transitions";
// constants
import { CursorContext } from "../../context/Store";
// images
import ProfileImg from "../../assets/images/profile-2.png";
// icons
import { FiSend } from "react-icons/fi";
import { colors } from "../../constants/Colors";

function Contacts() {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [formState, setformState] = useState({
        user_name: "",
        from_name: "",
        message: "",
    });
    const [sendSuccessfull, setSendSuccessfull] = useState({
        state: false,
        message: "",
    });
    const changeHandler = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    // send email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_rheobtk",
                "template_v2pt08h",
                form.current,
                "PBW0LFU-Qnyp1ks7n"
            )
            .then(
                (result) => {
                    if (
                        formState.user_name === "" ||
                        formState.from_name === "" ||
                        formState.message === ""
                    ) {
                        setSendSuccessfull({
                            state: true,
                            message: "All fileds are required",
                        });
                        alert("error");
                    } else {
                        e.target.reset();
                        setSendSuccessfull({
                            state: true,
                            message: "Your Email Was Send Successfully!",
                        });
                        setformState({
                            user_name: "",
                            from_name: "",
                            message: "",
                        });
                        alert("send");
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <MainContainer
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
        >
            <ContentContainer>
                <div className="wrapper">
                    <Left>
                        <LeftInnerContainer
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            <Title>Contact Me</Title>
                            <SubTitle>
                                I would love to get suggestions from you
                            </SubTitle>
                            <Form ref={form} onSubmit={(e) => sendEmail(e)}>
                                <InputFields>
                                    <InputField>
                                        <Label>Your Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="user_name"
                                            value={formState.user_name || ""}
                                            onChange={(e) => changeHandler(e)}
                                        />
                                    </InputField>
                                    <InputField>
                                        <Label>Your Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            name="from_name"
                                            value={formState.from_name || ""}
                                            onChange={(e) => changeHandler(e)}
                                        />
                                    </InputField>
                                    <InputField>
                                        <Label>Your Message</Label>
                                        <TextArea
                                            cols={"100%"}
                                            rows={4}
                                            placeholder="Enter your message"
                                            name="message"
                                            value={formState.message || ""}
                                            onChange={(e) => changeHandler(e)}
                                        />
                                    </InputField>
                                </InputFields>
                                <SubmitBtn type="submit">
                                    <span>Send Message</span>
                                    <FiSend className="send" />
                                </SubmitBtn>
                            </Form>
                        </LeftInnerContainer>
                    </Left>
                    <Right
                        initial={{ opacity: 0, y: "-80%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <ImageBox>
                            <img src={ProfileImg} alt="profile-image" />
                        </ImageBox>
                    </Right>
                </div>
            </ContentContainer>
        </MainContainer>
    );
}
const MainContainer = styled(motion.div)`
    height: 100vh;
    padding-top: 100px;
    background-color: #d8e6f2;
`;
const ContentContainer = styled.div`
    height: 100%;
    & .wrapper {
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    width: 50%;
    padding: 80px;
    @media all and (max-width: 1080px) {
        width: 65%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        padding: 60px 20px;
    }
    @media all and (max-width: 480px) {
        padding: 30px 0;
    }
`;
const LeftInnerContainer = styled.div``;
const Title = styled.h3`
    font-size: 40px;
    font-family: "dm_sansbold";
    @media all and (max-width: 1280px) {
        font-size: 36px;
    }
    @media all and (max-width: 1080px) {
        font-size: 34px;
    }
    @media all and (max-width: 768px) {
        font-size: 28px;
    }
    @media all and (max-width: 640px) {
        font-size: 26px;
    }
    @media all and (max-width: 480px) {
        font-size: 22px;
    }
`;
const SubTitle = styled.p`
    font-size: 16px;
    line-height: 1.4;
    color: #6f7176;
    margin-bottom: 30px;
    & p {
        margin-bottom: 10px;
    }
    & p:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const InputFields = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
`;
const InputField = styled.div`
    border-bottom: 1px solid ${colors.primary_black};
    width: 45%;
    &:last-child {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const Label = styled.label`
    display: block;
    font-family: "dm_sansmedium";
    font-size: 16px;
    color: #515760;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const Input = styled.input`
    padding: 5px 10px 10px 0;
    font-family: "dm_sansregular";
    font-size: 14px;
`;
const TextArea = styled.textarea`
    padding: 5px 10px 10px 0;
    font-family: "dm_sansregular";
    font-size: 14px;
    width: 100%;
`;
const SubmitBtn = styled.button`
    color: #fff;
    padding: 15px 25px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${colors.primary_black};
    cursor: pointer;
    & span {
        font-size: 16px;
        font-family: "dm_sansmedium";
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    & .send {
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
        font-size: 18px;
        @media all and (max-width: 900px) {
            font-size: 16px;
        }
    }
    &:hover {
        & .send {
            transform: rotate(0deg);
            transition: all 0.3s ease-in;
        }
    }
    @media all and (max-width: 980px) {
        margin: 20px auto 0;
    }
    @media all and (max-width: 900px) {
        padding: 12px 20px;
    }
`;
const Right = styled(motion.div)`
    width: 45%;
    height: 100%;
    position: relative;
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        height: 400px;
    }
    @media all and (max-width: 640px) {
        height: 350px;
    }
`;
const ImageBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    & img {
        height: 100%;
        object-fit: cover;
    }
    @media all and (max-width: 980px) {
        width: 50%;
        height: 100%;
        & img {
            height: 100%;
            object-fit: cover;
        }
    }
`;

export default Contacts;
