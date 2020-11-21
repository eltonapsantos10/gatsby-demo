import React from "react"
import { Link } from "gatsby"

import { Carousel, Card, CardGroup, Jumbotron, Button, Alert } from 'react-bootstrap';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import slide01 from "../images/pet.jpeg"
import slide02 from "../images/pet1.jpeg"
import slide03 from "../images/pet2.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Elton Santos | Home" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Card body> <h1 style={{ fontFamily: "fantasy", color: "orange", letterSpacing:"2px"}}>Encontre tudo para o seu pet com preços baixos e perto de você!</h1></Card>
    <h1></h1>
    <br />
    <h1 style={{ color: "blue", fontSize: "20px" }}></h1>
    <Link to="/"><img src="https://img.icons8.com/office/80/000000/dog.png" />_____________</Link>
    <Link to="/"><img src="https://img.icons8.com/officel/80/000000/cat.png" />_____________</Link>
    <Link to="/"><img src="https://img.icons8.com/office/80/000000/bird.png" />______________</Link>
    <Link to="/"><img src="https://img.icons8.com/officel/80/000000/year-of-rat.png" />____________</Link>
    <Link to="/"><img src="https://img.icons8.com/officel/80/000000/fish.png" />__________</Link>
    <Link to="/"><img src="https://img.icons8.com/officel/80/000000/chicken.png" /></Link>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>

    <Carousel>
      <Carousel.Item>
        <img src={slide01} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide02} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide03} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
      </Carousel.Item>
    </Carousel>


    <br></br>
    <Jumbotron>
      <h1 style={{ color: "orange", fontFamily: "fantasy", letterSpacing:"2px" }}>Venha nos conhecer!</h1>
      <p style={{ textAlign: "justify", color: "brown", fontFamily: "cursive", letterSpacing:"1px" }}>
        Trabalhamos para que você e seus pets tenham a melhor experiência em nossas lojas, seja através dos serviços de estética e veterinária ou pela variedade de produtos espalhados nos mais diversos mundos: cães, gatos, peixes, aves,
        roedores, répteis. Ah, mantemos nossas orelhas em pé para saber das novidades do mundo pet e levá-las até você.
  </p>
      <br></br>

      <hr></hr>
      <p>
        <Button variant="warning">Saiba mais</Button>
      </p>
    </Jumbotron>


    <CardGroup>
      <Card>
        <img src={slide01} alt="teste" className="d-black w-50" />
        <Card.Body>
          <Card.Title style={{color:"blue", fontFamily:"fantasy", letterSpacing:"2px"}}>Facilidade!</Card.Title>
          <Card.Text>
            <p style={{ textAlign: "justify", color:"brown" }} >Conveniência é com a gente! Tudo é preparado e organizado para você encontrar
      facilmente o que procura, e o melhor: a qualquer hora e no lugar que preferir </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
        <img src={slide03} alt="teste" className="d-black w-50" />
        <Card.Body>
          <Card.Title style={{color:"brown", fontFamily:"fantasy", letterSpacing:"2px"}}>Praticidade!</Card.Title>
          <Card.Text>
            <p style={{ textAlign: "justify", color:"orange"}}>Muitas vezes, sabemos que seu tempo é curto, mas queremos que você aproveite cada segundo que passar conosco! Para isso, a gente trata todos os pets com muita dedicação e respeito e trabalha a todo
      instante para que nossas lojas, produtos e serviços estejam à altura de tanto amor e cuidado..{' '} </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
        <img src={slide02} alt="teste" className="d-black w-50" />
        <Card.Body>
          <Card.Title style={{color:"orange", fontFamily:"fantasy", letterSpacing:"2px"}}>Dedicação!</Card.Title>
          <Card.Text>
            <p style={{ textAlign: "justify", color:"blue" }}>Sabemos que cuidar de nossos bichinhos é um prazer: selecionar a melhor ração,
      buscar mimos novos, levá-los para um banho. O que importa é ver que eles estão bem.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </CardGroup>

    <Alert variant="warning">
      <Alert.Heading><h3 style={{fontFamily:"arial", color:"black"}}>Quem somos e política:</h3></Alert.Heading>
      <p style={{textAlign:"justify", fontFamily:"arial", color:"grey"}}>
        Sabemos que cada laço é único. Fonte de alegria, evolução, bem-estar. Temos experiência e oferecemos espaços, produtos e serviços – e tudo mais que for preciso – para que a relação entre pets e suas famílias seja melhor a cada dia. Essa é nossa razão de ser.

        Somos apaixonados por pets! Essa não é apenas uma expressão inserida em nossa missão como empresa, mas uma realidade vivenciada todos os dias em nossas atitudes, nas lojas e em todos os nossos pontos de contato.

        Trabalhamos para que você e seus pets tenham a melhor experiência em nossas lojas, seja através dos serviços de estética e veterinária ou pela variedade de produtos espalhados nos mais diversos mundos: cães, gatos, peixes, aves, roedores, répteis. Ah,
        mantemos nossas orelhas em pé para saber das novidades do mundo pet e levá-las até você.
  </p>
      <hr />
      <p className="mb-0">
      Dica: É dever do proprietário proteger seu animal do sol e da chuva, além de impedir que os 
      bichinhos fujam ou saiam sozinhos na rua...
  </p>

  <br></br>

      <Link to="/page-2/">Voltar para página inicial</Link> <br />
      <Link to="/using-typescript/">Parcerias e afins</Link>
    </Alert>


<Link to="/"><img src="https://img.icons8.com/android/48/000000/facebook-new.png"/>_____________</Link>
    <Link to="/"><img src="https://img.icons8.com/fluent-systems-filled/48/000000/instagram-new.png"/>_____________</Link>
    <Link to="/"><img src="https://img.icons8.com/material-sharp/48/000000/youtube-play.png"/></Link>
    
  </Layout>
)

export default IndexPage
