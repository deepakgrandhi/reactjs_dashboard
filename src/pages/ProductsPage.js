import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography, Paper, Box, Button } from '@mui/material';

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const videoData = {
  room1: [
    'recording1',
    'recording2',
    'recording3',
    'recording4',
    'recording5',
    'recording6',
    'recording7',
    'recording8',
    'recording9',
  ],
  room2: [
    'room2_recording1',
    'room2_recording2',
    'room2_recording3',
    'room2_recording4',
    'room2_recording5',
    'room2_recording6',
    'room2_recording7',
  ],
  room3: ['room3_recording1', 'room3_recording2', 'room3_recording3', 'room3_recording4'],
};

const videoBorderStyle = {
  border: '1px solid "#b0b0b0',
  borderRadius: '8px',
  padding: '10px',
  marginBottom: '20px',
  marginRight: '10px',
  backgroundColor: '#e7e7e7',
};

export default function ProductsPage() {
  const [selectedRoom, setSelectedRoom] = useState('room1');
  const containerRef = useRef(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    containerRef.current.scrollLeft = 0;
  };

  const generateVideoElements = (room) =>
    videoData[room].map((recording, index) => (
      <div key={index} style={{ width: '300px', marginRight: '10px', flexShrink: 0 }}>
        <Paper elevation={3} style={videoBorderStyle}>
          <video className="video" autoPlay controls muted style={{ height: '200px', width: '100%' }}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Typography variant="subtitle1" align="center">
            {recording}
          </Typography>
        </Paper>
      </div>
    ));

  const roomOptions = Object.keys(videoData);

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Recordings
        </Typography>
        {roomOptions.map((room) => (
          <div key={room}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {room}
              </Typography>
              <Link to={`/dashboard/all-recordings/${room}`}>
                <Button variant="outlined" size="small" sx={{ mr: 2 }}>
                  View All
                </Button>
              </Link>
            </Box>
            <div
              style={{
                display: 'flex',
                overflowX: 'hidden',
                marginBottom: '20px',
              }}
              ref={containerRef}
            >
              {generateVideoElements(room)}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
