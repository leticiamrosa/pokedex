import styled from 'styled-components';
import posed from 'react-pose';
import { Button } from 'react-bootstrap';
import { colors } from '../../styles/styles';

const ButtonEffect = posed(Button)({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 },
});

export const ButtonSearch = styled(ButtonEffect)`
  background-color: ${props => props.background || colors.yellow};
  color: ${props => props.color};
  border: 1px solid ${colors.white};

  ::after{
    content: '🔎';
  }

  :hover {
    background-color: ${colors.primaryDarken};
    border: 1x solid ${colors.primaryDarken};
    border-radius: .25rem;
  }
`;

export default { ButtonSearch };

