import { useEffect, useState } from "react";

export default function StoryQuestion(props) {
  const { questionObject } = props;
  const { question, choices, keywords, answer } = questionObject;

  // when clicked, question activates for text input
  const [activated, setActivated] = useState(false);
  // state variable for text input that will be compared to choices, keywords
  const [input, setInput] = useState('');
  // when toggled, multiple choice questions will come up
  const [multipleChoice, setMultipleChoice] = useState(props.multipleChoice || false);
  const correctAnswer = input.toLowerCase() === answer.toLowerCase();
  // if question is answered, will lock in state
  const [complete, setComplete] = useState(false);
  const answerIncluded = input.includes(answer);

  function consoleTest() {
    console.log('question', {
      question,
      choices,
      answer,
      keywords,
      activated,
      input,
      correctAnswer,
      complete
    });
  }

  function handleClick() {
    setActivated(prev => !prev);
    setMultipleChoice(false);
    consoleTest();
  }

  function handleChoice(choice) {
    setInput(choice);
    if (correctAnswer && activated) {
      setComplete(true);
    }
  }

  function checkForCompletion() {
    if (correctAnswer || answerIncluded) {
      return setComplete(true);
    }
  }

  useEffect(() => {
    consoleTest();
    checkForCompletion();
  }, [input]);

  useEffect(() => {
    console.log(`Current completed status is ${complete} for ${question}`);
  }, [complete]);

  function reset() {
    setInput('');
    setComplete(false);
  }

  return (
    <div className="flex flex-col">
      <span onClick={handleClick} className="mt-2 mb-2 font-bold" children={question} />

      {complete && activated ? (
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span children={answer} />
          </div>
          <button onClick={reset} className="w-[150px]" children={'Try again for fun?'} />
        </div>
      ) : (
        <>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type={'textarea'}
            className={`${activated && !multipleChoice ? 'w-[300px] border-[1px] p-2 border-red-600 rounded-lg h-[100px]' : 'hidden'}`}
          />
          <button
            onClick={() => setMultipleChoice(prev => !prev)}
            className={`${activated && !multipleChoice ? 'w-[100px]' : 'hidden'}`}
            children={'Unsure?'}
          />
          {multipleChoice && activated ? (
            <>
              {choices.length > 0 &&
                choices.map(choice => (
                    <span
                        key={choice}
                        className={`${choice === input && choice === answer ? 'text-green-700' : ''}`}
                        onClick={() => handleChoice(choice)}
                        children={choice}
                    />
                    ))}
                    </>
                    ) : (
                    <></>
                    )}
                    </>
                    )}
                    </div>
                    );
                    }