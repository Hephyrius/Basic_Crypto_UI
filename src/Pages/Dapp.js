import * as React from 'react'
import GlobalStyles from '../GlobalStyles'
import Typography from '@mui/material/Typography'

export default function Dapp() {
  const classes = GlobalStyles()

  return (
    <div className="Dapp">
      <Typography
        align="center"
        variant="h3"
        className={classes.title}
        color="white"
      >
        💔SimpleStarterDapp💔 
      </Typography>
    </div>
  )
}
