import React from 'react';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import AnswersContainer from '../src/components/AnswersContainer';
import Logo from '../src/components/Logo';
import Widget from '../src/components/Widget';
import db from '../db.json';
import Button from '../src/components/Button';
import LoadingWidget from '../src/components/LoadingWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const myanswers = [];

export default function Quiz() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const itemList = [];
  const [qLeft, setQLeft] = React.useState(true);
  const [qN, setQN] = React.useState(0);
  const [nCA, setNCA] = React.useState(0);
  const [myanswer, setMyAnswer] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function calculatePoints() {
    let c = 0;
    for (let i = 0; i < myanswers.length; i++) {
      if (myanswers[i] === true) {
        c += 1;
        setNCA(c);
      } else {
        c += 0;
        setNCA(c);
      }
    }
  }

  function creatingElements() {
    for (let c = 0; c < db.questions[qN].alternatives.length; c++) {
      itemList.push(<AnswersContainer key={c} onClick={(evt) => highlightElement(evt)} id={c} className="alternatives">{db.questions[qN].alternatives[c]}</AnswersContainer>);
    }
  }

  function elementsShow() {
    if (qLeft === true) {
      return (
        <Widget.Content>
          <h2>{db.questions[qN].title}</h2>
          <p>{db.questions[qN].description}</p>
          {itemList}
          <Button disabled={myanswer === ''} onClick={() => nextQuestion()}>Confirmar</Button>
        </Widget.Content>
      );
    }
    return (
      calculatePoints(),
      setScreenState(screenStates.RESULT)
    );
  }

  function nextQuestion() {
    const alternatives = document.querySelectorAll('.alternatives');

    function goToTheNextQuestion() {
      setQN(qN + 1);
      alternatives.forEach(
        // eslint-disable-next-line no-param-reassign
        (alternative) => { alternative.style.backgroundColor = db.theme.colors.secondaryBg; },
      );
    }

    if (qN < db.questions.length) {
      const cA = db.questions[qN].answer;
      if (cA === +myanswer) {
        alternatives[myanswer].style.backgroundColor = '#4CAF50';
        myanswers.push(true);
      } else {
        alternatives[myanswer].style.backgroundColor = '#FF5722';
        myanswers.push(false);
      }

      if (qN < db.questions.length - 1) {
        const animation = document.querySelector('.js-animation');
        animation.classList.add('animation');
        setMyAnswer('');
        setTimeout(() => {
          goToTheNextQuestion();
          animation.classList.remove('animation');
        }, 2000);
      } else {
        const animation = document.querySelector('.js-animation');
        animation.classList.add('animation');
        setTimeout(() => {
          setQLeft(false);
          elementsShow();
        }, 2000);
      }
    }
  }
  creatingElements();

  function highlightElement(evt) {
    const alternatives = document.querySelectorAll('.alternatives');
    alternatives.forEach(
      // eslint-disable-next-line no-param-reassign
      (alternative) => { alternative.style.backgroundColor = db.theme.colors.secondaryBg; },
    );

    setMyAnswer(evt.target.id);
    // eslint-disable-next-line no-param-reassign
    evt.target.style.backgroundColor = db.theme.colors.terciary;
  }

  function QuizWidget() {
    return (
      <div>
        <Widget.Header>
          <Button.ChevronLeft disabled={false}><img src="/chevron_left_24px.png" alt="chevron-left" /></Button.ChevronLeft>
          <h2>
            { `Pergunta ${qN + 1} de ${db.questions.length}` }
          </h2>
        </Widget.Header>
        {elementsShow()}
        <Widget.Animation>
          <div className="js-animation" />
        </Widget.Animation>
      </div>
    );
  }

  function ResultWidget() {
    return (
      <div>
        <Widget.Header>
          <h1>Você completou o Quiz!</h1>
        </Widget.Header>
        <Widget.Content>
          <h2>
            {`Parabéns você acertou ${nCA} de ${db.questions.length}!`}
          </h2>
          <h2>
            {`Você fez ${nCA * 20} pontos!`}
          </h2>
          <h2>Respostas Corretas:</h2>
          <ul>
            {myanswers.map((answers, idx) => (
              <li key={`${idx}`}>
                {answers === true
                  ? (
                    <AnswersContainer.Correct>
                      Resposta #0
                      {idx + 1}
                      :
                      {answers === true ? ' Correta' : ' Errada'}
                    </AnswersContainer.Correct>
                  )
                  : (
                    <AnswersContainer.Wrong>
                      Resposta #0
                      {idx + 1}
                      :
                      {answers === true ? ' Correta' : ' Errada'}
                    </AnswersContainer.Wrong>
                  ) }
              </li>
            ))}
          </ul>
        </Widget.Content>
      </div>
    );
  }

  return (
    <QuizBackground backgroundImage="/megaman.jpg">
      <QuizContainer>
        <Logo />
        <Widget>
          {screenState === screenStates.RESULT && <ResultWidget />}
          {screenState === screenStates.LOADING && <LoadingWidget />}
          {screenState === screenStates.QUIZ && QuizWidget()}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
