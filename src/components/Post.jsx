import { Favorite, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

export default function Post() {
  return (
    <Card sx={{ margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Andrii Rastorhuiev'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='280px'
        image='https://images.pexels.com/photos/12194751/pexels-photo-12194751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<Favorite />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
