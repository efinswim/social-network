import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/8958899/pexels-photo-8958899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.pexels.com/photos/8958899/pexels-photo-8958899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/8958899/pexels-photo-8958899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/8958899/pexels-photo-8958899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/10917106/pexels-photo-10917106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={10}>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://images.pexels.com/photos/2345374/pexels-photo-2345374.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://images.pexels.com/photos/1956973/pexels-photo-1956973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
