import React from 'react'

import { LightbulbOutlined as Light } from '@mui/icons-material'
import { Box,Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Icon=styled(Light)`
  font-size: 120px;


`;

const Text=styled(Typography)`
  font-size:12px;

`;

const StyledBox=styled(Box)`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:20vh;
`

const EmptyContent = () => {
  return (
    <StyledBox>
      <Icon/>
      <Text>
        Здесь будут ваши заметки
      </Text>

    </StyledBox>
  )
}

export default EmptyContent
