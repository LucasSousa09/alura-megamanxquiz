import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import OptionsContainer from '../src/components/OptionsContainer'
import Logo from '../src/components/Logo/'
import Widget from '../src/components/Widget'
import db from '../db.json'


export default function Quiz(){
    return(
        <QuizBackground backgroundImage={'/megaman.jpg'}>
            <QuizContainer>
            <Logo />
            <Widget>
                <Widget.Header>
                    <button className=" chevron-left"><img src="/chevron_left_24px.png"/> </button>
                    <h2>Pergunta 1 de {db.questions.length}</h2>
                </Widget.Header>
                <Widget.Content>
                    <h2>{db.questions[0].title}</h2>
                    <p>{db.questions[0].description}</p>
                    <OptionsContainer>
                        {db.questions[0].alternatives[0]}        
                    </OptionsContainer>
                    <OptionsContainer>
                        {db.questions[0].alternatives[1]}        
                    </OptionsContainer>
                    <OptionsContainer>
                        {db.questions[0].alternatives[2]}        
                    </OptionsContainer>
                    <OptionsContainer>
                        {db.questions[0].alternatives[3]}        
                    </OptionsContainer>

                    <button className="confirmation-button">Confirmar</button>
                </Widget.Content>
            </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}