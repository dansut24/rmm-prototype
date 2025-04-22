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

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
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
              component="div"
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

          {/* Mobile Drawer Below Header */}
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                px: 3,
                py: 2,
                backgroundColor: theme.palette.background.default
              }}
            >
              {navItems.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  component={RouterLink}
                  underline="none"
                  onClick={toggleMenu}
                  color={location.pathname === path ? 'primary.main' : 'text.primary'}
                  fontWeight={location.pathname === path ? 'bold' : 'normal'}
                >
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
