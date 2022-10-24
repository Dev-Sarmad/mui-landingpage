import {  Button, Card,  CardActions,  CardContent,  CardMedia,  Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import  '../assets/2111.w030.n002.246B.p1.246.jpg';
import '../assets/Cityscapes - Downtown.png';
import '../assets/output-onlinepngtools.png';
import '../assets/landscap.jpg';


function CardCom() {
  return (
    <div>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <Card sx={{maxWidth:'345px', marginTop:'10px',background:'black'}}>
                        
                        <CardMedia 
                        component='img'
                        image={require('../assets/output-onlinepngtools.png')}
                        
                        alt='image'
                        
                        />
                            <CardContent>
                            <Typography sx={{color:'white'}} component={'div'}>
                                this is the card  sjdasja asdhadh asjdhajsdk sadhkajsdh djjda
                                dfhjfhj
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' variant='contained' color='primary'>
                                    share
                                </Button>
                                <Button size='small' variant='contained' color='success'>
                                    learn more
                                </Button>
                            </CardActions>
                            
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Card sx={{maxWidth:'345px' ,marginTop:'10px',background:'black'}}>
                        
                        <CardMedia 
                        component='img'
                        image={require('../assets/2111.w030.n002.246B.p1.246.jpg')}
                        height='50vh'
                        alt='image'
                        
                        />
                            <CardContent>
                            <Typography sx={{color:'white'}} component={'div'}>
                                this is the card  sjdasja asdhadh asjdhajsdk sadhkajsdh djjda
                                dfhjfhj
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' variant='contained' color='primary'>
                                    share
                                </Button>
                                <Button size='small' variant='contained' color='success'>
                                    learn more
                                </Button>
                            </CardActions>
                            
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Card sx={{maxWidth:'345px' ,marginTop:'10px',background:'black'}}>
                        
                        <CardMedia 
                        component='img'
                        image={require('../assets/landscap.jpg')}
                        height='50vh'
                        alt='image'
                        
                        />
                            <CardContent>
                            <Typography sx={{color:'white'}} component={'div'}>
                                this is the card  sjdasja asdhadh asjdhajsdk sadhkajsdh djjda
                                dfhjfhj
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' variant='contained' color='primary'>
                                    share
                                </Button>
                                <Button size='small' variant='contained' color='success'>
                                    learn more
                                </Button>
                            </CardActions>
                            
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default CardCom