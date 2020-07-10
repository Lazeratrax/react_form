// import styled from '@emotion/styled/macro'
import styled from 'styled-components';
import { colors } from '../styles/variables'
import { Typography } from 'antd'
import { Form } from 'formik-antd'

export const LoginScreen = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`
export const LoginLabel = styled.div`
  padding: 0;
`
export const LoginFormWrapper = styled.div`
  width: 100%;
  max-width: 374px;
`
export const LoginHeader = styled.header`
  color: ${colors.gray};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
`
export const LoginFormActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-btn {
    font-family: SF Compact Display;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    width: 100%;
    height: 44px;
    margin: 30px 0;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #DEDEDE;
    border: none;
    cursor: pointer;
  }
  .ant-btn:hover, 
  .ant-btn:focus {
    background: ${colors.black_main};
  }
  & > span {
    font-size: .875rem;
  }
`
export const LoginFormSubActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div:first-of-type {
    margin-right: .5rem;
  }
`
export const LoginTitle = styled(Typography.Text)`
  color: ${colors.black_main};
  /* letter-spacing: 0.04em; */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 47px;
  line-height: 55px;
`


export const RegistrationFormWrapper = styled.div`
.ant-form-item {
  width: 100%;
  height: 62px;
}
.ant-form-item-control-input-content {
  position: relative;
}
.ant-tooltip-inner {
    color: yellow;
    background-color: green;
}

.ant-tooltip-placement-bottom .ant-tooltip-arrow,
 .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow, 
 .ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    border-bottom-color: green;
}
 input {
  font-size: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  border-bottom: 1px solid #DEDEDE;
  outline: none;
  width: 100%;
  
  box-sizing: border-box;
  /* padding-top: 28px; */
  padding-left: 0;
  padding-bottom: 9px;
  background: transparent;
 } 
 input:focus::placeholder
 {
  color: transparent;
  outline: none;
} 
input:hover::placeholder{
  color: transparent;
  outline: none;
}
`
export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 9px;
  transition: .3s;
`
