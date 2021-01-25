import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer/'
import OtherQuizes from '../src/components/OtherQuizes'
import LogoContainer from '../src/components/Logo/'
import Image from 'next/image'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  @media screen and(max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={'/megaman.jpg'}>
        <LogoContainer>
          <img src="/logoalura.png"></img>
        </LogoContainer>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                {db.description}
              </p>
              <input type="text" placeholder="Digite seu nome, nobre guerreiro(a)!"></input>
              <button>Game Start!</button>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1> Quizes da Galera!</h1>
              <p>
                Não esqueça de visitar esse Quizes incríveis que a galera da Imersão React criou!!!
              </p>
              <OtherQuizes>
                <a href="#">paulosouza/jsmortalquiz</a>
              </OtherQuizes>
              <OtherQuizes>
                <a href="#">juliana/cssmatadorquiz</a>
              </OtherQuizes>
              <OtherQuizes>
                <a href="#">soutinho/thelegendofzeldaquiz</a>
              </OtherQuizes>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner />     
    </QuizBackground>  
  )
}
