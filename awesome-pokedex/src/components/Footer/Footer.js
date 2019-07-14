import React from 'react';
import { FooterBar, Typographys } from './FooterStyle';
import { Grid } from '@material-ui/core';

const Footer = ({
    params,
}) => (
  <FooterBar container>
    <Grid item xs={12}>
      <Typographys style={{ color: 'white'}}variant="body1" >Made with <span role="img" aria-label="Emoticon de coração">️❤️</span></Typographys>
    </Grid>
  </FooterBar>
);

export default Footer;
