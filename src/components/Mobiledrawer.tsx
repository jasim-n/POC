import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close, Menu } from '@mui/icons-material';


export default function Mobiledrawer() {
  const [close, setClose] = useState(false);

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setClose(open);
    };
    const menuItems = [
      { label: 'Home' },
      { label: 'About', subItems: [{ label: 'Subitem 1' }, { label: 'Subitem 2' }] },
      { label: 'Student Courses' },
      { label: 'Contacts' }
    ];
  const list = () => (

    <Box
      sx={{ width: 250 ,backgroundColor:"#c9d6ef" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Button sx={{color:"black",mt:2,ml:-1,width:"100%",justifyContent:"flex-end"}} onClick={toggleDrawer(false)}><Close /></Button>

      <List sx={{display:"flex",flexDirection:"column"}}>
      {menuItems.map((item, index) => (
        <ListItem sx={{width: item.subItems ? "100%" : "auto", flexDirection:item.subItems? "column":"row"}} key={item.label} disablePadding>
          <ListItemButton sx={{width: item.subItems ? "100%" : "auto"}}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>   

            <ListItemText primary={item.label} />
          </ListItemButton>   

          {item.subItems && (
            <List>
              {item.subItems.map((subItem) => (
                <ListItem key={subItem.label} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
    </List>
  
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='sm:hidden'>

        <>
          <Button sx={{color:"white",":focus":{outline: "none"}}} onClick={toggleDrawer( true)}><Menu /></Button>
          <Drawer
          sx={{
            "& .MuiDrawer-paper": {
             
              backgroundColor:"#c9d6ef",
            },
          }}
            anchor={"left"}
            open={close}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </>
    
    </div>
  );
}
