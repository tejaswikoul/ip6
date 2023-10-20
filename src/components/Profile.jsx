import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    background-color: #3a4659;
    color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileHeader = styled.h2`
    font-size: 32px;
    margin-bottom: 15px;
    text-transform: uppercase;
`;

const ProfileSubHeader = styled.h3`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;

const ProfileText = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.5;
    color: #fff;
`;

const Name = styled.span`
    color: #007BFF;
`;

const Profile = () => {
    const profileData = {
        name: 'Tejaswi Koul',
        bio: 'Front-End Developer',
        edu: 'B.E Information Technology',
        clg: 'Vivekananda Education Society Institute of Technology, Mumbai',
    };

    return (
        <ProfileContainer>
            <ProfileHeader>My Profile</ProfileHeader>
            <ProfileHeader><Name>{profileData.name}</Name></ProfileHeader>
            <ProfileSubHeader>{profileData.bio}</ProfileSubHeader>
            <ProfileText>{profileData.edu}</ProfileText>
            <ProfileText>Graduating from <Name>{profileData.clg}</Name></ProfileText>
        </ProfileContainer>
    );
};

export default Profile;
