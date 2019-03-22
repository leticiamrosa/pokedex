import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {
  Navbar,
  Nav,
  Footer,
  Typographys,
} from './LayoutStyle';
import { colors, fonts } from '../../styles/styles'

const Layout = ({
    params,
}) => (
<div style={{ flexGrow: 1 }}>
      {/* <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color={colors.light}>
            AwesomePokedex
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Navbar position="static">
        <Nav background={colors.coolGrey} >
          <Typographys variant="h5" > AwesomePokedex</Typographys>
        </Nav>
      </Navbar>
      <Grid container>

      </Grid>
      <Footer container>
        <Grid item xs={12}>
          <Typographys variant="caption">Made with ❤️</Typographys>
        </Grid>
      </Footer>
    </div>
);

export default Layout;
