import React from "react"
import { Link } from "gatsby"

import { Image, Jumbotron, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"


const fiveth = () => (
  <Layout>
<br></br>
<br />
    <br />
    <br />
    <br />
    <br />
    <br />
<Jumbotron fluid>
  <Container>
    <h1 style={{fontFamily:"fantasy", color:"orange", letterSpacing:"2px"}}>Siga-nos em nossas Redes Sociais:</h1>
    <p>
        <br></br>
        <hr></hr>
    <Link to="/"><img src="https://img.icons8.com/fluent/96/000000/facebook-new.png"/></Link> <br></br>
    <Link to="/"><img src="https://img.icons8.com/fluent/96/000000/instagram-new.png"/></Link> <br></br>
    <Link to="/"><img src="https://img.icons8.com/fluent/96/000000/youtube-studio.png"/></Link>
    </p>
    <hr></hr>
  </Container>
</Jumbotron>
    <SEO title="Elton Santos | Redes" />
    
    <Link to="/">Voltar para página inicial</Link>
  </Layout>
)

export default fiveth