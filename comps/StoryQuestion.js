import { useEffect, useState } from "react";
import { hasKeyword } from "../funcs/hasKeyword";
import { removePunctuation } from "../funcs/removeCommas";
import { processString } from "../funcs/processString";

export default function StoryQuestion(props) {
  const { questionObject, setCurrentScore } = props;
  const { question, choices, keywords, answer } = questionObject;

  // when clicked, question activates for text input
  const [activated, setActivated] = useState(false);

  // state variable for text input that will be compared to choices, keywords
  const [input, setInput] = useState('');

  const correctAnswer = input.toLowerCase() === answer.toLowerCase();

  // if question is answered, will lock in state
  const [complete, setComplete] = useState(false);

  const newKeywords = processString(answer);
  // const newInput = removePunctuation(input);
  const containsKeywords = hasKeyword(input, answer);

  function consoleTest() {
    console.log('question', {
      question,
      // choices,
      answer,
      // keywords,
      activated,
      input,
      newKeywords,
      // newInput,
      containsKeywords,
      // correctAnswer,
      // answerIncluded,
      complete
    });
  }

  function handleClick() {
    setActivated(prev => !prev);
    // if (activated && complete && containsKeywords) { setCurrentScore(prev => prev + 1) };

    // setMultipleChoice(false);
    // consoleTest();
  }

  // function handleChoice(choice) {
  //   setInput(choice);
  //   if (correctAnswer && activated) {
  //     setComplete(true);
  //   }
  // }

  // function checkForCompletion() {
  //   if (correctAnswer || answerIncluded) {
  //     return setComplete(true);
  //   }
  // }

  // function checkForMatch(string, stringsToMatch) {
  //   for (const s of stringsToMatch) {
  //     if (string.includes(s)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  useEffect(() => {
    // checkForCompletion();
    // console.log('checking keywords', checkForMatch(input, keywords));
    console.log('Activated', activated);
    consoleTest();
  }, [activated]);

  useEffect(() => {
    // console.log(`Current completed status is ${complete} for ${question}`);
    consoleTest();

    if ((complete) && (containsKeywords)) {
      setCurrentScore(prev => ++prev)
    }

    // increase the current score if question is completed and correct
  }, [complete]);

  function reset() {
    setComplete(false);
    if (containsKeywords) { setCurrentScore(prev => prev - 1) };
  }

  function clearInput() {
    setInput('');
  }

  return (
    <div className="flex flex-col">
        <span onClick={handleClick} className={`mt-2 mb-2 font-bold ${activated && 'text-blue-700'}`} children={question} />

      { complete && activated ? (
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <span><b>Response:</b> {input}</span>
            <span><b>Answer:</b> {answer}</span>
            <span
              className={`p-4 font-black tracking-wide ${containsKeywords ? 'text-green-600' : 'text-red-600' }`}
              children={containsKeywords ? 'Congrats! You got this one correct!' : 'Looks like you did not quite get this one...'}
            />
          </div>
          <button onClick={reset} className="p-2 w-[150px] border rounded-md mt-2 bg-red-100" children={'Edit Answer'} />
        </div>
      ) : (
        <>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type={'textarea'}
            className={`${activated ? 'w-full border-[1px] p-2 border-red-600 rounded-lg h-[100px]' : 'hidden'}`}
          />
          <div className="flex gap-2 items-center">
            <button 
              className={`${activated ? 'p-2 w-[100px] border rounded-md mt-2 bg-green-100' : 'hidden'}`}
              children={'Submit'}
              onClick={() => setComplete(true)}
            />
            <button 
              className={`${activated  ? 'p-2 w-[100px] border rounded-md mt-2 bg-blue-100' : 'hidden'}`}
              children={'Reset'}
              onClick={clearInput}
            />
            {/* <button
              onClick={() => setMultipleChoice(prev => !prev)}
              className={`${(activated && !multipleChoice && (choices.length > 0)) ? 'p-2 w-[100px] border rounded-md mt-2 bg-red-100' : 'hidden'}`}
              children={'Unsure?'}
            /> */}
          </div>
          {/* { multipleChoice && activated ? (
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
                    )} */}
                    </>
                    )}
                    </div>
                    );
                    }