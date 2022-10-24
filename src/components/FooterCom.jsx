import { Box, Grid, Link } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import '../assets/bg.jpg'

function footerCom() {
    console.log('footer here')
  return (
    <div>
        <footer>
            <Box sx={{marginTop:'20px', background:'#21618C'}}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4}>
                        <Grid item xs="12" sm='4'>
                            <Box borderBottom={2}>Help</Box>
                            <Box>
                                <Link >Gmail</Link>
                            </Box>
                            <Box>
                                <Link>support</Link>
                            </Box>
                            <Box>
                                <Link>privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs="12" sm='4'>
                            <Box borderBottom={2}>Account</Box>
                            <Box>
                                <Link >Login</Link>
                            </Box>
                            <Box>
                                <Link>SignUp</Link>
                            </Box>
                        </Grid>
                        <Grid item xs="12" sm='4'>
                            <Box borderBottom={2}>Messages</Box>
                            <Box>
                                <Link >BAckUp</Link>
                            </Box>
                            <Box>
                                <Link>History</Link>
                            </Box>
                            <Box>
                                <Link>Gmail</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    </div>
  )
}

export default footerCom