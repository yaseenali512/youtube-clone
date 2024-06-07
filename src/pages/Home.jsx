import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { searchVideos } from "../utils/api";
import styled from "styled-components";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchVideos = async () => {
      const results = await searchVideos(searchQuery || "");
      setVideos(results);
      setShowAll(false); // Reset showAll when the query changes
    };

    fetchVideos();
  }, [searchQuery]);

  useEffect(() => {
    setDisplayedVideos(videos.slice(0, 6));
  }, [videos]);

  const handleShowMore = () => {
    setDisplayedVideos(videos);
    setShowAll(true);
  };

  return (
    <StyledContainer>
      <h2 className="mb-4">
        {searchQuery
          ? `Search results for "${searchQuery}"`
          : "Recommended Videos"}
      </h2>
      <VideoGrid>
        {displayedVideos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </VideoGrid>
      {!showAll && videos.length > 6 && (
        <ShowMoreButton onClick={handleShowMore}>Show More</ShowMoreButton>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: black;
`;

const VideoGrid = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ShowMoreButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #d32f2f;
  }
`;

export default Home;
