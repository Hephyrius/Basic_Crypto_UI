import React from 'react';
import GlobalStyles from './../GlobalStyles';
import clsx from 'clsx';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useContractRead, erc20ABI, useAccount} from 'wagmi'


export default function Bar() {
  const classes = GlobalStyles();
  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <div className="appBar">
      <AppBar position="static" className={clsx(classes.appBar)} style={{ spacing: 1 }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>SimpleStarter</Typography>
          <div>
            <Button color="inherit" href="/" >dApp</Button>
            {!isDisconnected ? (<><Button color="inherit" href="https://polygonscan.com/token/0x0000000000000000000000000000000000000000" > 🚀{"$" + "0.00"}🌙</Button></>) : (<><Button color="inherit" href="https://polygonscan.com/token/0x0000000000000000000000000000000000000000" > 🚀{"$Token"}🌙</Button></>)}
            <Button color="inherit" href="" >Docs</Button>
          </div>
          <div className={classes.toolbarButtons}>
            <ConnectButton />  
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
