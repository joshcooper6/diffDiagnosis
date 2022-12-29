import { useEffect, useState } from 'react';
import { test, newTest } from '../testDB';
import Header from '../comps/Header';
import { getSentencesWithType } from '../funcs/getSentences';
import { formatStory } from '../funcs/formatStory';
import StoryBlock from '../comps/StoryBlock';

export default function sampleStory({story}) {

    const [question, setQuestion] = useState({
        question: '',
        choices: [],
        answer: ''
    });

    function renderChoices(sentence) {
        // take sentence from rendered story and filter it through database questions
        let questionInStory = test.questions.filter(q => q.string.includes(sentence))[0];
        // set choices and answers to the ones for the specific question in the database
        let choices = questionInStory.choices;
        let answer = questionInStory.answer;

        return { choices, answer };
    }

    function handleChange(string) {
        setQuestion({
            question: string,
            choices: renderChoices(string).choices,
            answer: renderChoices(string).answer
        })
    }

    const filteredSentences = getSentencesWithType(story);

    useEffect(() => {console.log(question)}, [question]);

  const singleStory = newTest.elements;

  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header />
        <div className='w-11/12 max-w-[1000px] self-center p-4'>
        { singleStory.map(story => {
          return <StoryBlock key={story.patient} story={story} />
        }) }
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