import React from 'react';
import styled from 'styled-components';
import projectsData from './project';

const Projects = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  `;

  const Card = styled.div`
    background-color: #3498db;
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-5px);
    }
  `;

  const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
  `;

  const TechStack = styled.p`
    font-size: 16px;
    color: #fff;
  `;

  const Link = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  `;

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <Container>
      {projectsData.map((project) => (
        <Card key={project.id} onClick={() => handleClick(project.githubUrl)}>
          <Title>{project.name}</Title>
          <TechStack>{project.techStack}</TechStack>
          <Link href={project.githubUrl} target="_blank">
            View on GitHub
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
