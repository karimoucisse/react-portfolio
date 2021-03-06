// import "./projectMobile.scss"
import React from 'react'
import {Carousel} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
  background : #ffff;
  overflow :hidden;
  padding-top : 80px;
`
const Image = styled.img`
  display : block;
  width : 90vw;
  height : 50vh;
  margin-bottom : 70px;
  object-fit: fill;
  box-shadow : 4px 4px 4px grey;
  border-radius : 20px;
`
const CarouselItemElement = styled.div`
  position : relative;
  display : flex;
  justify-content : center;
`
const Link = styled.a`
  // position : relative;
  text-decoration : none;
`
// const Resume = styled.div`
//   display : flex;
//   justify-content : center;
//   align-items : center;
//   height : 80px;
//   position : absolute;
//   bottom : 60px;
//   left : 0;
//   background-color : rgba(0,0,0,0.7);
//   width : 100vw;
//   color : #fff;
//   font-size : 30px;
// `

export default function ProjectMobile() {
    return (
      <Container className="projectMobile" id= "projectMobile">
        <Carousel variant="dark">
            <Carousel.Item>
              <Link 
                href="https://projet-2048.netlify.app/" 
                target="_blank"
                rel="noreferrer"  
              >
                <CarouselItemElement>
                  <Image 
                    src="assets/2048.jpg"
                    alt="First slide" 
                  />
                  {/* <Resume>Jeux 2048</Resume> */}
                </CarouselItemElement>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link 
                href="https://karimoucisse.github.io/maquette/" 
                target="_blank"
                rel="noreferrer"
              >
                <CarouselItemElement>
                  <Image 
                    src="assets/reservia.png"
                    alt="second slide" 
                  />
                  {/* <Resume>Reservia</Resume> */}
                </CarouselItemElement>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link 
                href="https://gameofthrone.netlify.app/" 
                target="_blank"
                rel="noreferrer"
              >
                <CarouselItemElement>
                  <Image 
                    src="assets/gameofthrone.jpg" 
                    alt="third slide"
                  />
                  {/* <Resume>Game of Throne</Resume> */}
                </CarouselItemElement>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link 
                href="https://karimoucisse.github.io/Deezer/" 
                target="_blank"
                rel="noreferrer"
              >
                <CarouselItemElement>
                  <Image 
                    src="assets/deezer.png"
                    alt="fourth slide" 
                  />
                  {/* <Resume>Deezer</Resume> */}
                </CarouselItemElement>
              </Link>
            </Carousel.Item>
          </Carousel>
      </Container>
    );
}
