import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import { colors } from '../../theme'
import FavoriteIcon from '@mui/icons-material/Favorite';
const Actions = () => {
  return (
    <>
    <Box width='100%'  heigth='381.2px'>
      <Box width='100%' height={40}>
        <IconButton sx={{padding:'8px 24px'}} >
          <BsPlusSquareFill color='#b2b2b2' size="25px" />
          <Typography ml={2} variant='h6'>
            Create Playlist
          </Typography>
        </IconButton>
      </Box>
      <Box borderBottom={`1px solid ${colors.black[400]}`}  width='100%' height={40}>
        <IconButton sx={{padding:'8px 24px'}} >
          <FavoriteIcon sx={{color:'#b2b2b2'}}/>
          <Typography ml={2} fontWeight={500} variant='h5'>
            Liked Songs
          </Typography>
        </IconButton>
      </Box>
    </Box>
    </>
  )
}

export default Actions