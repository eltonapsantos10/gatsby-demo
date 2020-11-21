import React from "react"
import { Link } from "gatsby"

import { Jumbotron, Button, Container, Row, Col, } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import dog2 from "../images/dog2.jpeg"
import dog1 from "../images/dog1.jpeg"
import dog3 from "../images/dog3.jpeg"
import dog4 from "../images/dog4.jpeg"
import dog5 from "../images/dog5.jpeg"
import dog6 from "../images/dog6.jpeg"

import gato1 from "../images/gato1.png"
import gato2 from "../images/gato2.jpeg"
import gato3 from "../images/gato3.jpeg"
import gato4 from "../images/gato4.jpeg"
import gato5 from "../images/gato5.jpeg"
import gato6 from "../images/gato6.png"

const thirdPage = () => (
  <Layout>

    <SEO title="Elton Santos | Adoção" />
    <br></br>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Jumbotron>
      <h1 style={{ fontFamily: "fantasy", color: "orange", letterSpacing: "2px" }}>Animais para Adoção (Castrados e Vacinados)</h1>
      <p style={{ fontFamily: "coursive", color: "brown", letterSpacing: "1px" }}>
        Adotar um animal é uma excelente maneira de ajudar pessoas com depressão,
        pois essa convivência reduz a sensação de solidão, ansiedade, melhora o bom-humor, além de deixar o ambiente mais feliz!
  </p>
      <p>
        <Button variant="dark">Saiba mais</Button>
      </p>
    </Jumbotron>


    <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src={dog1} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={dog2} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={dog3} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={dog4} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={dog5} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={dog6} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>

        <Col xs={6} md={4}>
          <img src={gato1} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={gato2} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={gato3} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={gato4} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={gato5} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
        <Col xs={6} md={4}>
          <img src={gato6} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
        </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
    <Link to="/">Voltar para página inicial</Link>
  </Layout>
)

export default thirdPage
