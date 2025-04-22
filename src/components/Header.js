import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Link,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const navItems = [
  { label: 'Home', path: '/', icon: <HomeIcon fontSize="small" /> },
  { label: 'About', path: '/about', icon: <InfoIcon fontSize="small" /> },
  { label: 'Services', path: '/services', icon: <BuildIcon fontSize="small" /> },
  { label: 'Contact', path: '/contact', icon: <ContactMailIcon fontSize="small" /> }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => setMenuOpen(prev => !prev);

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
          <Toolbar sx={{ minHeight: 48, px: 2 }}>
            {/* Logo Placeholder */}
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: 'grey.400',
                borderRadius: '50%',
                mr: 2
              }}
            />

            {/* App Name */}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
                flexGrow: 1
              }}
            >
              Hi5TechRMM
            </Typography>

            {/* Nav or Hamburger */}
            {isMobile ? (
              <IconButton onClick={toggleMenu} color="inherit">
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {navItems.map(({ label, path, icon }) => (
                  <Link
                    key={path}
                    to={path}
                    component={RouterLink}
                    underline="none"
                    color={location.pathname === path ? 'primary.main' : 'text.primary'}
                    fontWeight={location.pathname === path ? 'bold' : 'normal'}
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>

          {/* Mobile Drawer Below Header */}
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 2,
                backgroundColor: theme.palette.background.default
              }}
            >
              {navItems.map(({ label, path, icon }) => (
                <Link
                  key={path}
                  to={path}
                  component={RouterLink}
                  underline="none"
                  onClick={toggleMenu}
                  color={location.pathname === path ? 'primary.main' : 'text.primary'}
                  fontWeight={location.pathname === path ? 'bold' : 'normal'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '1.2rem' }}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </Box>
          </Collapse>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
