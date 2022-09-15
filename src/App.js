import React, {useState} from 'react';
import './index.scss';

const quizzQuestions = [
  {
    title: 'React is a ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'a Component is a ... ',
    variants: ['application', 'part of an application or page', 'something that I don\'t know'],
    correct: 1,
  },
  {
    title: 'JSX is an',
    variants: [
      'simple HTML',
      'function',
      'HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Winner" />
      <h2>You answered {correct} questions out of {quizzQuestions.length}</h2>
      <a href="/"><button>Try again</button></a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
	const percent = Math.round(step / quizzQuestions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
				{
					question.variants.map((text, index) => <li key={text} onClick={() => onClickVariant(index)}>{text}</li>)
				}
      </ul>
    </>
  );
}

function App() {

	const [step, setStep] = useState(0);
	const [correct, setCorrect] = useState(0);

	const quizzQuestion = quizzQuestions[step];

	const onClickVariant = (index) => {
		setStep(step + 1);
		if(index === quizzQuestion.correct) {
			setCorrect(correct + 1);
		}
	}

  return (
    <div className="App">
      {
				step !== quizzQuestions.length ? (<Game step={step} question={quizzQuestion} onClickVariant={onClickVariant} />) : (<Result correct={correct} />)
			}
      
    </div>
  );
}

export default App;
