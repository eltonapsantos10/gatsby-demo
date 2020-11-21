import React from "react"
import { Link } from "gatsby"

import { Image, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import slide01 from "../images/pet4.jpeg"

const SecondPage = () => (
  <Layout>
    <SEO title="Elton Santos | Veterinário" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <img src={slide01} alt="Esta é meu primeiro carrossel" className="d-block w-100" />


    <Form>
      <br />
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{fontFamily:"fantasy", letterSpacing:"1px"}}>Informaçõe do Dono (a): </Form.Label>
        <Form.Control type="" placeholder="nome - email - telefone - bairro" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{fontFamily:"fantasy", letterSpacing:"1px"}}>Informações do Pet:</Form.Label>
        <Form.Control type="password" placeholder="nome - sexo - idade - raça" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{fontFamily:"fantasy", letterSpacing:"1px"}}>O que precisa ser avaliado no Pet:</Form.Label>
        <Form.Control type="password" placeholder="ex.: animal está com a pata ferida, dente quebrado, olhos vermelhos, coceiras pelo corpo..." />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">

      </Form.Group>
      <Button variant="primary" type="enviar">
        enviar
  </Button>
    </Form>
    <br />
    <Link to="/">Voltar para página inicial</Link>
  </Layout>

)

export default SecondPage
