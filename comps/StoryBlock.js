import { useEffect, useState } from "react";
import StoryQuestion from "./StoryQuestion";

export default function StoryBlock(props) {
    const { story, blocksRead, singleStory, setBlocksRead, setCurrentPlacement, currentPlacement, index } = props;
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        console.log('index', index)
    }, [])

    function increase() {
        if (currentPlacement <= (singleStory.length - 1)) {
          setCurrentPlacement(prev => {
            if (!blocksRead.includes(prev + 1)) {
              setBlocksRead(previous => [...previous, prev + 1]);
            }
            return (prev + 1)
          });
        } else {
          setCurrentPlacement(0);
        }
      };

    return (<>
    <div className={`flex ${!blocksRead.includes(index) ? 'blur' : ''} h-max select-none flex-col mb-2`}>
        <span className={`${((story.questions.length > 0) & blocksRead.includes(index)) ? 'hover:font-bold cursor-pointer' : ''} transition_fast`} onClick={() => {setShowQuestions(prev => !prev)}}>{story.storyBlock}</span>
        <div className={`transition_fast overflow-hidden rounded-lg mt-2 mb-2 flex flex-col gap-1 ${(showQuestions && (story.questions.length > 0) && blocksRead.includes(index)) ? 'max-h-[1000px] border-red-500 border-[1px] p-4' : 'max-h-[0px] p-0 select-none'}`}>
            { story.questions.map((q, index) => {
                return <StoryQuestion index={index} key={q.question} questionObject={q} />
            }) }
        </div>
        
        { (blocksRead[blocksRead.length - 1] === (index)) ? <>
            <button onClick={increase}>Increase</button>
        </> : <></> }

    </div>
    </>)
}

// create a question component so that it can set its state as the answer for easy input
// initial input is text; however, include 'not sure' button that triggers multiple choice