import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  /* display: flex; */
  /* flex-direction: column; */

  /* align-items: center; */
  margin-bottom: 10px;
  font-size: 20px;
  color: #ffffff;
`;

export const FilterInput = styled.input`
  flex: 1;
  margin-top: 15px;
  padding: 1em 2em;
  border: 0;
  width: 300px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 0.8rem;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: #2f3546;
  caret-color: #ffffff;

  background: linear-gradient(to bottom, #2f3546 0%, #565e79 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f3546', endColorstr='#565e79', GradientType=0 );

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }
`;