import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { setSelectedTab } from './store';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, BottomNavigation, BottomNavigationAction, useMediaQuery, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const tabs = [
  { label: 'Home', icon: <HomeIcon /> },
  { label: 'Games', icon: <SportsEsportsIcon /> },
  { label: 'Create', icon: <AddCircleOutlineIcon /> },
  { label: 'Playing', icon: <PlayCircleOutlineIcon /> },
  { label: 'Profile', icon: <AccountCircleIcon /> },
];

function TabPage({ label }: { label: string }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{label}</Typography>
    </Box>
  );
}

function App() {
  const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (tab: string) => {
    dispatch(setSelectedTab(tab));
  };

  // Removed unused event parameter from onChange handler to fix TS6133 error

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <List>
            {tabs.map((tab) => (
              <ListItem key={tab.label} disablePadding>
                <ListItemButton selected={selectedTab === tab.label} onClick={() => handleTabChange(tab.label)}>
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <TabPage label={selectedTab} />
      </Box>
      {isMobile && (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
          <BottomNavigation
            showLabels
            value={selectedTab}
            onChange={(_, newValue) => {
              handleTabChange(newValue);
            }}
          >
            {tabs.map((tab) => (
              <BottomNavigationAction key={tab.label} label={tab.label} value={tab.label} icon={tab.icon} />
            ))}
          </BottomNavigation>
        </Box>
      )}
    </Box>
  );
}

export default App;
