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
  const answerIncluded = input.toLowerCase().includes(answer.toLowerCase());

  function consoleTest() {
    console.log('question', {
      question,
      choices,
      answer,
      keywords,
      activated,
      input,
      correctAnswer,
      answerIncluded,
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

  function checkForMatch(string, stringsToMatch) {
    for (const s of stringsToMatch) {
      if (string.includes(s)) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    consoleTest();
    checkForCompletion();
    console.log('checking keywords', checkForMatch(input, keywords));
  }, [input]);

  useEffect(() => {
    console.log(`Current completed status is ${complete} for ${question}`);
    consoleTest();
  }, [complete]);

  function reset() {
    setInput('');
    setComplete(false);
  }

  return (
    <div className="flex flex-col">
      <span onClick={handleClick} className="mt-2 mb-2 font-bold" children={question} />

      { complete && activated ? (
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <span><b>Response:</b> {input}</span>
            <span><b>Answer:</b> {answer}</span>
          </div>
          <button onClick={reset} className="p-2 w-[200px] border rounded-md mt-2 bg-red-100" children={'Try again for torture?'} />
        </div>
      ) : (
        <>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type={'textarea'}
            className={`${activated && !multipleChoice ? 'w-full border-[1px] p-2 border-red-600 rounded-lg h-[100px]' : 'hidden'}`}
          />
          <div className="flex gap-2 items-center">
            <button 
              className={`${activated && !multipleChoice ? 'p-2 w-[100px] border rounded-md mt-2 bg-green-100' : 'hidden'}`}
              children={'Submit'}
              onClick={() => setComplete(true)}
            />
            <button
              onClick={() => setMultipleChoice(prev => !prev)}
              className={`${(activated && !multipleChoice && (choices.length > 0)) ? 'p-2 w-[100px] border rounded-md mt-2 bg-red-100' : 'hidden'}`}
              children={'Unsure?'}
            />
          </div>
          { multipleChoice && activated ? (
            <>
              {choices.length > 0 &&
                choices.map(choice => (
                    <span
                        key={choice}
                        className={`p-4 cursor-pointer hover:border-black border-[1px] mb-2 ${choice === input && choice === answer ? 'text-green-700' : ''}`}
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