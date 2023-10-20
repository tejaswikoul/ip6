import React from "react";
import styled from "styled-components"; 

const SkillsContainer = styled.div`
    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    p {
        margin: 0;
    }

    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
`;

const Skills = () => {
    return (
        <SkillsContainer>
            <h1>Skills</h1>
            <ul>
                <li>
                    <p>React</p>
                </li>
                <li>
                    <p>SQL</p>
                </li>
                <li>
                    <p>Java</p>
                </li>
                <li>
                    <p>AWS</p>
                </li>
            </ul>
        </SkillsContainer>
    );
};

export default Skills;
