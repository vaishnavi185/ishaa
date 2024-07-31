import React from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  padding: 20px;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionHeading = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

function History() {
  const videos = [
    { title: "Video 1", image: "./video1.jpeg", text: "Description of Video 1" },
    { title: "Video 2", image: "./video2.jpg", text: "Description of Video 2" },
    { title: "Video 3", image: "./video3.jpeg", text: "Description of Video 3" },
  ];

  const articles = [
    { title: "Article 1", image: "./article2.jpg", text: "Description of Article 1" },
    { title: "Article 2", image: "./article2.jpg", text: "Description of Article 2" },
    { title: "Article 3", image: "./article3.jpg", text: "Description of Article 3" },
  ];

  return (
    <HistoryContainer>
      <Section>
        <SectionHeading>Recently Opened Videos</SectionHeading>
        <CardsRow>
          {videos.map((video, index) => (
            <Card key={index}>
              <img src={video.image} alt={video.title} />
              <p>{video.text}</p>
            </Card>
          ))}
        </CardsRow>
      </Section>
      <Section>
        <SectionHeading>Recently Opened Articles</SectionHeading>
        <CardsRow>
          {articles.map((article, index) => (
            <Card key={index}>
              <img src={article.image} alt={article.title} />
              <p>{article.text}</p>
            </Card>
          ))}
        </CardsRow>
      </Section>
    </HistoryContainer>
  );
}

export default History;
