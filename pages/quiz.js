import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import AnswersContainer from '../src/components/AnswersContainer'
import Logo from '../src/components/Logo/'
import Widget from '../src/components/Widget'
import db from '../db.json'


export default function Quiz(){
    
    const itemList=[]
    const [qLeft, setQLeft] = React.useState(true)
    const [qN, setQN] = React.useState(0)
    const [nCA, setNCA] = React.useState(0)
    const [myanswer, setMyAnswer] = React.useState('')
    

    creatingElements()
    function creatingElements(){
        for(let c = 0; c < db.questions[qN].alternatives.length; c++){
            itemList.push(<AnswersContainer key={c} onClick={(evt) => highlightElement(evt)} id={c} className="alternatives">{db.questions[qN].alternatives[c]}</AnswersContainer>)
        }
    }

    function elementsShow(){
        //Calling the variable?!!!
        if(qLeft === true){
        return (
            <Widget.Content>
                <h2>{db.questions[qN].title}</h2>
                <p>{db.questions[qN].description}</p>
                {itemList}
                <button disabled={myanswer === ""} className="confirmation-button" onClick={() => nextQuestion()}>Confirmar</button>
            </Widget.Content>
        )}
        else{
            return (
                <Widget.Content>
                    <h1>Parabéns você acertou {nCA} de {db.questions.length}</h1>
                </Widget.Content>
            )
        }
    }

    function highlightElement(evt){
        const alternatives = document.querySelectorAll(".alternatives")
        alternatives.forEach(alternative => {alternative.style.backgroundColor = db.theme.colors.secondaryBg})

        setMyAnswer(evt.target.id)
        evt.target.style.backgroundColor = db.theme.colors.terciary
    }

    function nextQuestion(){
        const alternatives = document.querySelectorAll(".alternatives")
        const button = document.querySelector(".confirmation-button")

        function goToTheNextQuestion(){
            setQN(qN + 1)
            alternatives.forEach(alternative => {alternative.style.backgroundColor = db.theme.colors.secondaryBg})
            button.innerHTML = "Confirmar"
            button.classList.remove("correct")
            button.classList.remove("wrong")
        }

        if(qN < db.questions.length){
            const cA = db.questions[qN].answer
            if(cA === +myanswer){
                alternatives[myanswer].style.backgroundColor = "#4CAF50"

                button.classList.add("correct")
                button.innerHTML = `<img src="/correct.svg"/>` 

                setNCA(nCA+1)
            }
            else{
                alternatives[myanswer].style.backgroundColor = "#FF5722"
                button.classList.add("wrong")
                button.innerHTML = `<img src="/wrong.svg"/>`
            }

            if(qN < db.questions.length - 1){
                const animation = document.querySelector(".js-animation")
                animation.classList.add("animation")
                setMyAnswer("")
                setTimeout(() => {
                    goToTheNextQuestion()
                    animation.classList.remove("animation")
                }, 2000)
            }
            else{
                const animation = document.querySelector(".js-animation")
                animation.classList.add("animation")
                setTimeout(() => {
                    setQLeft(false)
                    elementsShow()
                }, 2000)
            }
        }        
    }

    return(
        <QuizBackground backgroundImage={'/megaman.jpg'}>
            <QuizContainer>
            <Logo />
            <Widget>
                <Widget.Header>
                    <button className=" chevron-left"><img src="/chevron_left_24px.png"/></button>
                    <h2>Pergunta {qN + 1} de {db.questions.length}</h2>
                </Widget.Header>
                {elementsShow()}
                <Widget.Animation>
                    <div className="js-animation"></div>
                </Widget.Animation>
            </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}
