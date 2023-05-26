import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
  /* border-bottom: 1px solid #ffffff; */
  text-shadow: -1px -1px #221e2e, 0 1px 0 #686674;
`;

export const Name = styled.span`
  width: 150px;
  font-size: 18px;
  color: #ffffff;
  border-bottom: 1px solid #4c4a52;
`;

export const Number = styled.span`
  width: 150px;
  font-size: 18px;
  color: #ffffff;
  border-bottom: 1px solid #4c4a52;
`;

export const ContactBtn = styled.button`
  display: block;
  width: 90px;
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #ffbf00;
  background: linear-gradient(to bottom, #ffbf00 0%, #fa9f17 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffbf00', endColorstr='#fa9f17', GradientType=0 );
  border: 0;
  border-radius: 30px;

  text-shadow: -1px -1px #b86200, 0 1px 0 #ecb76b;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(0.95);
  }
`;
