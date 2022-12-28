import { useState } from "react";

export default function StoryBlock(props) {
    const { story } = props;
    const [showQuestions, setShowQuestions] = useState(false);

    return (<>
    <div className='flex h-max cursor-pointer flex-col mb-2'>
        <span className="hover:font-bold transition_fast" onClick={() => {setShowQuestions(prev => !prev)}}>{story.storyBlock}</span>
        <div className={`transition_fast overflow-hidden rounded-lg mt-2 mb-2 flex flex-col gap-1 ${showQuestions ? 'max-h-[1000px] border-red-500 border-[1px] p-4' : 'max-h-[0px] p-0 select-none'}`}>
            { story.questions.map(q => {return <span key={q.question} className='mt-2 font-bold mb-2'>{q.question}</span>}) }
        </div>
    </div>
    </>)
}

// create a question component so that it can set its state as the answer for easy input