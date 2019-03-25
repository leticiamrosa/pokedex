import React from 'react';
import { ContainerSpinner, ContentSpinner, Spinner } from './SpinnerIfStyles';
import { colors } from '../../styles/styles';

const SpinnerIf = (props) => {
  const {
    show, color, description, textStyle,
  } = props;

  if (show) {
    return (
      <ContainerSpinner container justify="center" alignItems="center" spacing={16}>
        <ContentSpinner item>
          <Spinner aria-describedby color={color || colors.primary}/>
        </ContentSpinner>
      </ContainerSpinner>
    );
  }
  return false;
};

export default SpinnerIf;
