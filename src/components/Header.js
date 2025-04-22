import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawer = (
    <Box
      sx={{
        width: '250px',
        padding: 3,
        height: '100%',
        backgroundColor: theme.palette.background.default
      }}
      role="presentation"
    >
      <IconButton onClick={toggleDrawer} sx={{ float: 'right' }}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            component={RouterLink}
            underline="none"
            color={location.pathname === path ? 'primary.main' : 'text.primary'}
            fontWeight={location.pathname === path ? 'bold' : 'normal'}
            onClick={toggleDrawer}
          >
            {label}
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <AppBar
          position="static"
          elevation={4}
          sx={{
            width: '90%',
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
            >
              Hi5TechRMM
            </Typography>

            {isMobile ? (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {navItems.map(({ label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    component={RouterLink}
                    underline="none"
                    color={location.pathname === path ? 'primary.main' : 'text.primary'}
                    fontWeight={location.pathname === path ? 'bold' : 'normal'}
                  >
                    {label}
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
