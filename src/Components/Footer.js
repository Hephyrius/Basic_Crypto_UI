import React from 'react'
import GlobalStyles from './../GlobalStyles'
import clsx from 'clsx'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import ChatIcon from '@mui/icons-material/Chat'
import ArticleIcon from '@mui/icons-material/Article'

export default function Footer() {
  const classes = GlobalStyles()

  return (
    <div className="Footer">
      <Card className={classes.noBg} style={{ backgroundColor: 'black' }}>
        <Typography align="center" color="white">
          <IconButton color="inherit" href="">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="">
            <TelegramIcon />
          </IconButton>
          <IconButton color="inherit" href="">
            <ChatIcon />
          </IconButton>
          <IconButton color="inherit" href="">
            <ArticleIcon />
          </IconButton>
        </Typography>
        <Typography align="center" color="white">
          <IconButton color="inherit" href="/" align="right">
            SimpleStarterDapp 2023 ©{' '}
          </IconButton>
        </Typography>
      </Card>
    </div>
  )
}
