import React from "react"
//import { Link } from "gatsby"

import { Card, CardDeck, Button } from "react-bootstrap"

import Layout from "../components/layout"
//import SEO from "../components/seo"

import casa from "../images/casa.jpeg"
import casa1 from "../images/casa1.jpeg"
import casa2 from "../images/casa2.jpeg"

import racao from "../images/racao.jpeg"
import racao1 from "../images/racao1.jpeg"
import racao2 from "../images/racao2.jpeg"

import roupa1 from "../images/roupa1.jpeg"
import roupa2 from "../images/roupa2.jpeg"
import roupa3 from "../images/roupa3.jpeg"

function fourthPage() {
    return (
        <Layout>
            <br></br>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={casa} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Casinha de Madeira</Card.Title>
                        <Card.Text>
                            Casa de madeira isola o calor e permite que o animal se abrigue na sombra.
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={casa1} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Cama de madeira</Card.Title>
                        <Card.Text>
                            Semelhante a um berço, o tutor protege o cãozinho e, de quebra, dá para balançá-lo, colocando-o para dormir.{' '}
                        </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={casa2} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Casinha de madeirite colorida</Card.Title>
                        <Card.Text>
                            Casa de madeirite colorida permite que o animal se abrigue na sombra, além de um design super moderno.
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>

            </CardDeck>

            <br>
            </br>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={racao} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Ração Pedigree </Card.Title>
                        <Card.Text>
                            apresenta excelentes níveis de cálcio, como demandado em uma dieta balanceada de qualidade. O fósforo pode melhorar a dieta do animal, ajuda nas vias de metabolização
                            e faz com que o seu pet tenha uma composição de nutrientes balanceada em seu corpo.
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={racao1} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Ração Golden</Card.Title>
                        <Card.Text>
                            Promove o crescimento das articulações e ossos do cachorro e cumpre os requisitos de nutrientes diários. Além disso, a ração Golden é excelente para cães adultos e idosos,
      pois contém a quantidade certa de proteínas para fornecer energia e vitalidade nos cachorros.{' '}
                        </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={racao2} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Ração Quatree</Card.Title>
                        <Card.Text>
                            Alimento elaborado com matérias-primas selecionadas, que proporciona uma alimentação completa para o seu cão. Possui polpa de beterraba e prebiótico (MOS)
                            para um ótimo equilíbrio intestinal, e extrato de yucca, que auxilia na redução do odor das fezes.
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>

            </CardDeck>
            <br>
            </br>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={roupa1} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Roupinha para cachorro</Card.Title>
                        <Card.Text>
                            Moda confortável roupas para animais de estimação casaco de algodão para
                            filhote de cachorro colete de rosa roupa de inverno quente roupas para cães
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={roupa2} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Máscara personalizada</Card.Title>
                        <Card.Text>
                            Máscaras de Proteção Cachorro. Camada dupla em tecido 100% algodão,
      reutilizável. Fácil para respirar com alta capacidade de retenção de partículas.{' '}
                        </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={roupa3} alt="Esta é meu primeiro carrossel" className="d-block w-100" />
                    <Card.Body>
                        <Card.Title>Vestido para cadela adulta</Card.Title>
                        <Card.Text>
                            Moda confortável roupas para animais de estimação casaco de algodão para
                            filhote de cachorro colete de rosa roupa de inverno quente roupas para cães
      </Card.Text>
                        <Button variant="primary">comprar</Button>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>

            </CardDeck>

        </Layout>
    )
}

export default fourthPage
