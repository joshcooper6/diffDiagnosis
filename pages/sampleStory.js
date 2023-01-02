import { useEffect, useState } from 'react';
import { test, newTest } from '../testDB';
import Header from '../comps/Header';
// import { getSentencesWithType } from '../funcs/getSentences';
// import { formatStory } from '../funcs/formatStory';
import StoryBlock from '../comps/StoryBlock';
import { getQuestions } from '../funcs/getQuestions';

export default function sampleStory({story}) {

    // const [question, setQuestion] = useState({
    //     question: '',
    //     choices: [],
    //     answer: ''
    // });

    // function renderChoices(sentence) {
    //     // take sentence from rendered story and filter it through database questions
    //     let questionInStory = test.questions.filter(q => q.string.includes(sentence))[0];
    //     // set choices and answers to the ones for the specific question in the database
    //     let choices = questionInStory.choices;
    //     let answer = questionInStory.answer;

    //     return { choices, answer };
    // }

    // function handleChange(string) {
    //     setQuestion({
    //         question: string,
    //         choices: renderChoices(string).choices,
    //         answer: renderChoices(string).answer
    //     })
    // }

    // const filteredSentences = getSentencesWithType(story);

    // useEffect(() => {console.log(question)}, [question]);

  const singleStory = newTest.elements;
  const [blocksRead, setBlocksRead] = useState([0]);
  const [currentPlacement, setCurrentPlacement] = useState(0);

  useEffect(() => {
    console.log('current placement index', currentPlacement)
  }, [currentPlacement])

  useEffect(() => {
    console.log('current blocks read', blocksRead)
  }, [blocksRead])

  // const [showQuestions, setShowQuestions] = useState(false);
  const allQuestions = getQuestions(singleStory).length;
  const [currentScore, setCurrentScore] = useState(0);
  const scorePercent = `${Math.ceil((currentScore / allQuestions) * 100)}%`
  useEffect(() => {
    const data = {
      allQuestions,
      currentScore,
      scorePercent
    }
    console.log(data);
  }, [currentScore]);

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header />
        <div className='w-11/12 max-w-[1000px] self-center p-4'>
        { singleStory.map((story, index) => {
          return <StoryBlock 
              index={index} 
              setCurrentPlacement={setCurrentPlacement} 
              setBlocksRead={setBlocksRead} 
              singleStory={singleStory} 
              currentPlacement={currentPlacement} 
              blocksRead={blocksRead} 
              key={story.patient} 
              story={story} 
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            />
        }) }

        { (blocksRead.length === singleStory.length) ? <h1 className='text-center uppercase font-black text-4xl p-4 text-red-600'>Congrats! You have completed this story.</h1> : <></> }

        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const story = await test;
  
    return {
      props: {
        story,
      },
    };
  }