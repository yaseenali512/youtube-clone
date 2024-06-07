import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;

  const truncatedTitle =
    snippet.title.length > 30
      ? snippet.title.slice(0, 30) + "..."
      : snippet.title;

  return (
    <StyledVideoCard>
      <Link to={`/video/${id.videoId}`}>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <ContentWrapper>
          <h3>{truncatedTitle}</h3>
        </ContentWrapper>
      </Link>
    </StyledVideoCard>
  );
};

const StyledVideoCard = styled.div`
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  background-color: #282828;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
  }

  div {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  h3 {
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    color: white;
    font-family: "Times New Roman", Times, serif;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
`;

export default VideoCard;
