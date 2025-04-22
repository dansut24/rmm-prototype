import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      {/* Hero Section */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Powerful Remote Monitoring & Management
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Secure. Scalable. Built for modern IT teams.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/featured/?monitoring"
              alt="Device Monitoring"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Real-Time Monitoring
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stay ahead with live insights into your devices, networks, and system health.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/featured/?remote,access"
              alt="Remote Access"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Unattended Remote Access
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Instantly connect to remote endpoints and support your users from anywhere.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/featured/?patch,security"
              alt="Patching Automation"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Automated Patching
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Keep systems secure and up to date with scheduled or on-demand patching.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* CTA */}
      <Box textAlign="center" sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Ready to simplify your IT operations?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Book a Demo
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
