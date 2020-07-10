import React, { useState } from 'react'
import * as yup from 'yup'
import 'antd/dist/antd.css';
import './style.css'
import {
  LoginFormActions,
  LoginFormSubActions,
  LoginFormWrapper,
  LoginHeader,
  LoginScreen,
  LoginTitle,
  LoginLabel,
  RegistrationFormWrapper,
  Label
} from './Login.styles'
import { colors } from '../styles/variables'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import { Tooltip } from 'antd'
import { NAV } from '../nav'
import { Link } from 'react-router-dom'
import { MailOutlined as IconMail, LockOutlined as IconLock, SmileOutlined } from '@ant-design/icons'
import { message, Result, Button } from 'antd'

export const validateSchema = yup.object()
  .shape({
    name: yup.string().trim().required(),
    nickname: yup.string().trim().required(),
    email: yup.string().email().required(),
    phone: yup.string().trim().required(),
    password: yup.string().trim().required(),
  })
  .required()

export type RegistrationFormData = yup.InferType<typeof validateSchema>

interface Props {
  onSubmit: (data: RegistrationFormData) => Promise<void>
}

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => {

  const initialValue = {
    name: '',
    nickname: '',
    email: '',
    phone: '',
    password: ''
  }

  return (
    <Formik<RegistrationFormData>
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validateSchema}>

      <Form>
        <Form.Item name="name">
          <Tooltip
            title="Имя">
            <Input
              placeholder="Имя"
              maxLength={25}
              name="name"
              size="large"
            />
          </Tooltip>
        </Form.Item>

        <Form.Item name="nickname">
          <Input
            name="nickname"
            size="large"
            placeholder="Никнейм"
          />
        </Form.Item>

        <Form.Item name="email">
          <Input
            name="email"
            size="large"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item name="phone">
          <Input
            name="phone"
            size="large"
            placeholder="Телефон"
          />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password
            addonBefore={<IconLock />}
            name="password"
            size="large"
            placeholder="Пароль"
          />
        </Form.Item>

        <LoginFormActions>
          <div>Я даю свое согласие на обработку персональных данных</div>
        </LoginFormActions>

        <LoginFormActions>
          <SubmitButton block size="large">Зарегистрироваться</SubmitButton>
        </LoginFormActions>

        <LoginFormSubActions>
          <div>Есть аккаунт?</div>
        </LoginFormSubActions>

      </Form>
    </Formik>
  )
}


const Registration: React.FC = () => {
  const [isRegistrationDone, setRegistrationDone] = useState(false)
  // const [registrationM] = useMutation<RegistrationM, RegistrationMVariables>(REGISTRATION)

  const handleRegistration = async (input: RegistrationFormData) => {
    try {
      // await registrationM({variables: {input}})
      setRegistrationDone(true)
    } catch (e) {
      message.error('Ошибка при отправке запроса, попробуйте позже')
    }
  }

  return (
    <LoginScreen>
      {!isRegistrationDone && (
        <LoginFormWrapper>

          <LoginHeader>
            <LoginTitle>Регистрация</LoginTitle>
            <LoginLabel>Введите свои данные</LoginLabel>
          </LoginHeader>

          <RegistrationFormWrapper>
            < RegistrationForm onSubmit={handleRegistration} />
          </RegistrationFormWrapper>

        </LoginFormWrapper>
      )}
      {isRegistrationDone && (
        <Result
          status="success"
          title="Регистрация завершена!"
          subTitle="Мы отправили на указанную почту всю необходимую информацию"
          extra={<Link to={NAV.App}><Button>На главную</Button></Link>}
        />
      )}
    </LoginScreen>
  )
}

export default Registration

// <link>Войти</link>
