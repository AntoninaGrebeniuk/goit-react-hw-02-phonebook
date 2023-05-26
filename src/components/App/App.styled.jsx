import styled from '@emotion/styled';

export const Container = styled.div`
  height: '100vh';
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* text-align: center; */
  padding: 80px;
  font-size: 40;
  color: '#010101';
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 450px;

  /* width: 100%; */
  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid #2f3546;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #2f3546;

  background: linear-gradient(
    to right,
    #2f3546 0%,
    #4e5672 29%,
    #4e5672 50%,
    #4e5672 71%,
    #2f3546 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f3546', endColorstr='#4e5672', GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;
