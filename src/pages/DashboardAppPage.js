import React, { useState } from 'react';
import { Grid, Container, Button, Typography } from '@mui/material';

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const videosPerPage = 6;

export default function DashboardAppPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalVideos = 9;
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = Math.min(startIndex + videosPerPage, totalVideos);

  const handleNextPage = () => {
    if (endIndex < totalVideos) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const generateVideoElements = () => {
    const videoElements = [];
    for (let i = startIndex; i < endIndex; i+=1) {
      videoElements.push(
        <Grid key={i} item xs={12} sm={6} md={4}>
          <video className="video" autoPlay controls muted style={{ height: '200px', width: '100%' }}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
      );
    }
    return videoElements;
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Live feed
        </Typography>
        <Grid container spacing={0}>
          {generateVideoElements()}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button variant="outlined" onClick={handleNextPage} disabled={endIndex >= totalVideos}>
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}
