import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 350px;

  /* width: 100%; */
  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid #b12816;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #bc3220;

  background: linear-gradient(
    to right,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#bc3220', GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const ContactInput = styled.input`
  flex: 1;
  padding: 1em 2em;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: #bc3220;
  caret-color: #ffffff;

  background: linear-gradient(to bottom, #bc3220 0%, #fa5846 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#fa5846', GradientType=0 );

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  width: 250px;

  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #ffbf00;
  background: linear-gradient(to bottom, #ffbf00 0%, #fa9f17 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffbf00', endColorstr='#fa9f17', GradientType=0 );
  border: 0;
  border-radius: 30px;
  color: #ffffff;
  margin-top: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  text-shadow: -1px -1px #b86200, 0 1px 0 #ecb76b;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: #ffffff;
  text-shadow: -1px -2px #a91400, 0 1px 0 #ff7e6d;
`;
