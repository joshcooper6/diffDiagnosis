import { useEffect, useState } from 'react';
import { test } from '../testDB';
import Header from '../comps/Header';
import { getSentencesWithType } from '../funcs/getSentences';
import { formatStory } from '../funcs/formatStory';

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


  return (
    <div className='flex flex-col justify-center items-center'>
        <Header />
        <div>
        {filteredSentences.map(sentence => {
            return <span className={`${sentence.type === 'question' ? 'font-bold' : ''}`} onClick={() =>{
                if (sentence.type === 'question') {handleChange(sentence.sentence)};
        }}>{sentence.sentence}. </span>
        })}
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
  };