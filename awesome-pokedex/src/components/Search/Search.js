import React from 'react';
import PropType from 'prop-types';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { ButtonSearch } from '../../components/Buttons/Button';
import { SearchContainer } from './SearchStyle';

const Search = ({
  placeholder,
  onClick,
  onChange,
  value,
}) => (
  <SearchContainer>
    <Row>
    <Col sm="4" />
      <Col sm="4">
        <InputGroup className="mb-3">
          <FormControl
            placeholder={placeholder}
            aria-label={placeholder}
            onChange={onChange}
            value={value}
          />
          <InputGroup.Append>
            <ButtonSearch variant="outline-secondary" onClick={onClick}>Search</ButtonSearch>
          </InputGroup.Append>
        </InputGroup>
      </Col>
      <Col sm="4"/>
    </Row>
  </SearchContainer>
);

Search.propTypes = {
  titleBrand: PropType.string,
  placeholder: PropType.string,
  onClick: PropType.func,
  onChange: PropType.func,
};

export default Search;
