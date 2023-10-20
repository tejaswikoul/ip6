import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
`;

const ContactMeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 20px;
`;

const ContactMeLabel = styled.label`
    margin-top: 10px;
`;

const ContactMeInput = styled.input`
    margin-left: 10px;
`;

const ContactMeTextarea = styled.textarea`
    margin-left: 10px;
`;

const ContactMeButton = styled.button`
    margin-top: 20px;
    background-color: #3498db; 
    color: #fff; 
    padding: 10px 20px; 
    border: none;
    cursor: pointer;
    transition: background-color 0.3s; 

    &:hover {
        background-color: #2677af; 
    }
`;

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        setSubmitted(true);
    };

    return (
        <ContactMeContainer>
            <h1>Contact Me</h1>
            {submitted ? (
                <div>Thank you for reaching out!</div>
            ) : (
                <ContactMeForm onSubmit={handleSubmit}>
                    <ContactMeLabel>
                        Name:
                        <ContactMeInput type="message" value={name} onChange={(e) => setName(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Email:
                        <ContactMeInput type="emailid" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Message:
                        <ContactMeTextarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeButton type="submit">Submit</ContactMeButton>
                </ContactMeForm>
            )}
        </ContactMeContainer>
    );
}

export default ContactMe;
