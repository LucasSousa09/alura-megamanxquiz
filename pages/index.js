import { useRouter } from 'next/router'
import db from '../db.json'
import Widget from '../src/components/Widget/'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer/'
import OptionsContainer from '../src/components/OptionsContainer'
import Logo from '../src/components/Logo/'


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={'/megaman.jpg'}>
        <QuizContainer>
          <Logo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                {db.description}
              </p>
              <form onSubmit={(evt) => {
                evt.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}>
                <input type="text" placeholder="Digite seu nome, nobre guerreiro(a)!" onChange={(evtInfo) => {
                  setName(evtInfo.target.value)
                }}></input>
                <button type="submit" disabled={name.length === 0}>Game Start!</button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1> Quizes da Galera!</h1>
              <p>
                Não esqueça de visitar esse Quizes incríveis que a galera da Imersão React criou!!!
              </p>
              <OptionsContainer>
                <a href="#">paulosouza/jsmortalquiz</a>
              </OptionsContainer>
              <OptionsContainer>
                <a href="#">juliana/cssmatadorquiz</a>
              </OptionsContainer>
              <OptionsContainer>
                <a href="#">soutinho/thelegendofzeldaquiz</a>
              </OptionsContainer>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner />     
    </QuizBackground>  
  )
}
