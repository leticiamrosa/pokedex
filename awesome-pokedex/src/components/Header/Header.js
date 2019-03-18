import React from 'react';
import { Nav, Form, FormControl } from 'react-bootstrap';
import { NavHeader } from './HeaderStyle';
import { ButtonSearch } from '../Buttons/Button';
import { colors } from '../../styles/styles';

const Header = ({
    titleBrand, labelButton
}) => (
  <NavHeader 
    backgroundcolor={colors.secondaryDarken} 
    expand="lg"
    color={colors.white}
  >
    <NavHeader.Brand href="#home">{titleBrand}</NavHeader.Brand>
    <NavHeader.Toggle aria-controls="basic-NavHeader -nav" />
    <NavHeader.Collapse id="basic-NavHeader -nav">
      <Nav >
        <Nav.Item>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <ButtonSearch
              // variant="outline-success"
              backgroundcolor="transparent"
              color="white"
              >
              {labelButton}
            </ButtonSearch>
          </Form>
        </Nav.Item>
      </Nav>
    </NavHeader.Collapse>
  </NavHeader>
);

export default Header;
