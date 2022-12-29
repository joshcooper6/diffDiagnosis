const test = {
    "id": "1",
    "category": "Red Blood Cell Infections",
    "diagnosis": "Babesiosis",
    "patient": "Barry, 45 year old male",
    "questions": [
         {
            "string": "The complete blood count revealed that Barry had a high white blood cell count, indicating  (a) .",
            "choices": [
                "Infection",
                "Leukemia",
                "Anemia",
                "Aplastic Anemia"
                ],
            "answer": "Infection"
        },
        {
            "string": "His red blood cell count was also low, indicating  (b) .",
            "choices": [
                "Anemia",
                "Leukemia",
                "Thrombocytopenia",
                "Polycythemia"
                ],
            "answer": "Anemia"
        },
        {
            "string": " His comprehensive metabolic panel revealed high liver enzymes, alanine transaminase (ALT) and aspartate transaminase (AST), which is a sign of  (c) .",
            "choices": [
                "Hemolysis",
                "Liver disease",
                "Kidney failure",
                "Pancreatitis"
            ],
            "answer": "Hemolysis"
        },
        {
            "string": "Other findings included an elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin– these three findings together in conjunction with low RBC indicates a very high likelihood of  (d)  which explains Barry’s jaundice"
        }
    ],
    "story": `Barry was an avid hiker, and there was no place he loved more than the beautiful trails of Connecticut. He spent every chance he got exploring the mountains and forests of the Constitution State, and he was always up for a new adventure. But one day, while out on a hike, Barry had an encounter that would change his life forever. He was walking through a dense patch of brush when he felt a sudden sting on his leg. When he looked down, he saw a small tick attached to his skin. Being an avid outdoorsman, he immediately recognized the tick as an Ixodes scapularis, or deer tick. He promptly removed the deer tick and thought nothing more of it. A few days later, Barry began to feel extremely tired and developed a fever with a splitting headache. He also noticed that he had lost his appetite and was experiencing muscle aches. Barry’s urine also had a dark color and he had a yellow tinge to his face and eyes. Concerned about these symptoms, Barry visited his primary care doctor. Physical exam findings revealed tenderness to palpation in the left upper quadrant with a palpable spleen. Barry was markedly jaundiced (due to the presence of ___ in the blood), and auscultation of his heart revealed tachycardia and an S3 gallop. Conjunctival pallor present bilaterally. His doctor decided to order a series of laboratory tests to try to determine the cause of his illness. The complete blood count revealed that Barry had a high white blood cell count, indicating  (a) . His red blood cell count was also low, indicating  (b) . His comprehensive metabolic panel revealed high liver enzymes, alanine transaminase (ALT) and aspartate transaminase (AST), which is a sign of  (c) . Other findings included an elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin– these three findings together in conjunction with low RBC indicates a very high likelihood of  (d)  which explains Barry’s jaundice. Barry’s doctor also ordered a peripheral blood smear with the CBC, which revealed Babesia organisms arranged in a tetrad (known as a Maltese cross) after utilizing Wright-Giemsa staining. This alone would be enough to establish the diagnosis, but a PCR (polymerase chain reaction) was also ordered which established the definitive diagnosis of _e__. This is a rare and potentially serious infection caused by a __Z___ that is transmitted through the bite of infected ticks. This tick-borne infection also comes with a high risk of co-infection with other species, such as __i__. However, Barry never had a bullseye rash (also known as _j__) and was not traveling in an endemic region for this pathogen, so his doctor was less worried about testing for this. To understand the severity of his diagnosis, Barry's doctor ordered an MRI (magnetic resonance imaging) of his chest to look for any abnormalities in his heart or lungs. The MRI showed that Barry had an enlarged _____, a common finding in patients with this condition due to the hemolysis of red blood cells. His lungs were also normal, which is reassuring since __(g)_ & __h__ is also a potential complication. Treatment for this condition typically involves a combination of medications, including atovaquone (class: ___k_) and azithromycin (class: __l___). Blood transfusion can also be utilized in cases of severe anemia. In Barry's case, his doctor prescribed the medications and arranged for him to receive a blood transfusion. Barry was also advised to take it easy and avoid strenuous activity given his heightened risk of splenic rupture. Barry followed his treatment plan and, after several weeks, began to feel much better. His energy levels improved, and his fever and muscle aches disappeared. Despite his full recovery, Barry was still devastated. He had always been so careful to avoid ticks, but somehow he had still managed to get bitten. From that moment on, he developed a fierce phobia of ticks. The next time he went hiking, Barry showed up in a full hazmat suit. His friends laughed at him, but Barry didn't care. As the years passed, they came to understand that this was just Barry's way of coping with his phobia. And in the end, they couldn't help but respect him for it.`
}

const newTest = {
    category: '',
    patient: '',
    diagnosis: '',
    elements: [
        {
            storyBlock: `Barry was an avid hiker, and there was no place he loved more than the beautiful trails of Connecticut. He spent every chance he got exploring the mountains and forests of the Constitution State, and he was always up for a new adventure.
            But one day, while out on a hike, Barry had an encounter that would change his life forever. He was walking through a dense patch of brush when he felt a sudden sting on his leg. When he looked down, he saw a small tick attached to his skin.
            Being an avid outdoorsman, he immediately recognized the tick as an Ixodes scapularis, or deer tick. He promptly removed the deer tick and thought nothing more of it.`,
            questions: [
                {
                    id: 1,
                    question: 'Uh-oh, a tick bite. Where could this be going? Write down as many tick-borne infections that you can think of. Then, think about or research the geographical locations these infections are most prevalent. Is Barry in an endemic area? ',
                    keywords: [
                        'pink',
                        'blue',
                        'choiceThree',
                        'green'
                    ],
                    choices: [
                        'choiceOne',
                        'choiceTwo',
                        'choiceThree',
                        'choiceFour'
                    ],
                    answer: 'choiceThree'
                }
            ]
        },
        {
            storyBlock: `A few days later, Barry began to feel extremely tired and developed a fever with a splitting headache. He also noticed that he had lost his appetite and was experiencing muscle aches. Barry’s urine also had a dark color and he had a yellow tinge to his face and eyes. Concerned about these symptoms, Barry visited his primary care doctor.
            Physical exam findings revealed tenderness to palpation in the left upper quadrant with a palpable spleen. Barry was markedly jaundiced, and auscultation of his heart revealed tachycardia and an S3 gallop. Conjunctival pallor present bilaterally. His doctor decided to order a series of laboratory tests to try to determine the cause of his illness.`,
            questions: [                
            {
                id: 1,
                question: 'Fever, loss of appetite, and muscle aches are a sign of?',
                keywords: [],
                choices: [],
                answer: ''
            },
            {
                id: 2,
                question: 'Why is Barry’s urine dark?',
                keywords: [],
                choices: [],
                answer: ''
            },
            {
                id: 3,
                question: 'Given Barry has jaundice, what is the most likely cause of his splenomegaly?',
                keywords: [],
                choices: [],
                answer: ''
            },
            {
                id: 4,
                question: 'Conjunctival pallor, tachycardia, and an S3 gallop are signs of what common condition?',
                keywords: [],
                answer: '',
                choices: []
            },
            {
                id: 5,
                question: 'What labs would you order to work this up?',
                keywords: [],
                choices: [],
                answer: ''
            }
        ]
        },
        {
            storyBlock: `The complete blood count revealed that Barry had leukocytosis and anemia. His comprehensive metabolic panel revealed high liver enzymes (alanine transaminase [ALT] and aspartate transaminase [AST]). Other findings included an elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin.`,
            questions: [
                {
                    id: 1,
                    question: 'Elevated liver enzymes is an obvious sign of?',                     
                    keywords: [],
                    choices: [],
                    answer: 'ketosis'
                },
                {
                    id: 2,
                    question: 'Elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin together indicate what pathological process is occurring in Barry’s blood? ',
                    keywords: [],
                    choices: [],
                    answer: ''
                }
            ]
        },
        {
            storyBlock: `Barry’s doctor also ordered a peripheral blood smear with the CBC, which revealed Babesia organisms arranged in a tetrad (known as a Maltese cross) after utilizing Wright-Giemsa staining. This alone would be enough to establish the diagnosis, but a PCR (polymerase chain reaction) was also ordered which confirmed the definitive diagnosis.
            This tick-borne infection also comes with a high risk of co-infection with other species, so testing for Borrelia burgdeforia was done. `,
            questions: [
                {
                    id: 1,
                    question: 'What is the diagnosis? ',
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 2,
                    question: 'The genus Babesia infect which cells preferentially?',
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 3,
                    question: `What signs and symptoms would raise the suspicion of Lyme disease?`,
                    keywords: [],
                    choices: [],
                    answer: ''
                }
            ]
        },
        {
            storyBlock: `To understand the severity of his diagnosis, Barry's doctor ordered an MRI (magnetic resonance imaging) of his chest to look for any abnormalities in his heart or lungs. Luckily his lungs were normal. There was notable splenomegaly, however. `,
            questions: [
                {
                    id: 1,
                    question: `What cardiorespiratory complications are associated with his condition? (ARDS, myocarditis)                    `,
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 2,
                    question: `Any other complications? Renal failure, sepsis, seizures, anemia`,
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 3,
                    question: `Given Barry’s splenomegaly, what complications should he be warned about? `,
                    keywords: [],
                    choices: [],
                    answer: ''
                }
            ]
        },
        {
            storyBlock: `Barry's treatment plan for babesiosis included a combination of medications, such as atovaquone and azithromycin, to help manage the infection. In cases of severe anemia, a blood transfusion may also be necessary. 
            To help minimize his risk of splenic rupture, Barry's doctor has advised him to take it easy and avoid strenuous activity. They also provided him with information about babesiosis and the potential complications to watch out for, in case his symptoms worsen and he needs to seek emergency care.`,
            questions: [
                {
                    id: 1,
                    question: `What pharmacological classes do these drugs belong to?`,
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 2,
                    question: `Using a medical resource, write a prescription for Barry with specific dosages. `,
                    keywords: [],
                    choices: [],
                    answer: ''
                },
                {
                    id: 3,
                    question: `What adverse effects are associated with these medications? `,
                    keywords: [],
                    choices: [],
                    answer: ''
                }
            ]
        },
        {
            storyBlock: `Barry followed his treatment plan and, after several weeks, began to feel much better. His energy levels improved, and his fever and muscle aches disappeared. 
            Despite his full recovery, Barry was still devastated. He had always been so careful to avoid ticks, but somehow he had still managed to get bitten. From that moment on, he developed a fierce phobia of ticks. The next time he went hiking, Barry showed up in a full hazmat suit. His friends laughed at him, but Barry didn't care. As the years passed, they came to understand that this was just Barry's way of coping with his phobia. And in the end, they couldn't help but respect him for it.`,
            questions: []
        }
    ]
}

module.exports = { test, newTest }   