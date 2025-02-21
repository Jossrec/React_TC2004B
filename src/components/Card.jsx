import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fotoBienvenida from '../imgs/fotoBienvenida.png';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 600, textAlign: "center", padding: 2 }}>
      <CardMedia
        component="img"
        alt="Bienvenida"
        height="200"
        image={fotoBienvenida}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          ¡Bienvenido a Nuestra Web!
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Explora nuestros contenidos y descubre todo lo que tenemos para ofrecerte.
          Estamos encantados de tenerte aquí. ¡Esperamos que disfrutes tu experiencia!
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary">Explorar</Button>
        <Button variant="outlined" color="secondary">Más información</Button>
      </CardActions>
    </Card>
  );
}
