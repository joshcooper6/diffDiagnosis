const barry = {
    patient: 'Barry',
    sex: 'Male',
    age: '45',
    diagnosis: 'Babesiosis',
    category: 'Hematology',
    chart: {
        'Symptom Onset': {
            paragraphs: `Barry was an avid hiker, and there was no place he loved more than the beautiful trails of Connecticut. He spent every chance he got exploring the mountains and forests of the Constitution State, and he was always up for a new adventure.
            But one day, while out on a hike, Barry had an encounter that would change his life forever. He was walking through a dense patch of brush when he felt a sudden sting on his leg. When he looked down, he saw a small tick attached to his skin.
            Being an avid outdoorsman, he immediately recognized the tick as an Ixodes scapularis, or deer tick. He promptly removed the deer tick and thought nothing more of it.
            A few days later, Barry began to feel extremely tired and developed a fever with a splitting headache. He also noticed that he had lost his appetite and was experiencing muscle aches. Barry’s urine also had a dark color and he had a yellow tinge to his face and eyes. Concerned about these symptoms, Barry visited his primary care doctor.`,
            questions: [
                { 
                    question: 'Uh-oh, a tick bite. Where could this be going? Write down as many tick-borne infections that you can think of. Then, think about or research the geographical locations these infections are most prevalent. Is Barry in an endemic area?',
                    answer: `Lyme disease (Borellia burgdorferi): northeastern, mid-Atlantic, and north-central United States, as well as certain parts of Europe and Asia. 
                    Anaplasmosis (Anaplasma phagocytophilum): upper Midwest and northeastern United States
                    Babesiosis (Babesia spp.): northeastern and upper Midwest United States, as well as parts of Europe and Asia. 
                    Ehrlichiosis (Ehrlichia spp.): eastern, south-central United States.
                    Rocky Mountain spotted fever (Rickettsia rickettsii): southeastern, south-central, and mid-Atlantic United States.
                    Powassan virus disease: throughout the United States, but is most common in the northeastern and north-central United States.`
                },
                {
                    question: `What is your differential diagnosis for Barry’s presentation?`,
                    answer: `Infection*
                    Babesiosis
                    Lyme disease
                    Hyperbilirubinemia 
                    Increased production of bilirubin due to hemolysis of erythrocytes
                    Liver disease (hepatitis, biliary cirrhosis, etc.)`
                }
            ]
        },
        'Physical Exam': {
            paragraphs: `His doctor completed a physical exam, revealing the following findings:
            - Abdominal exam revealed tenderness to palpation in the left upper quadrant with a palpable spleen. 
            - Barry was markedly jaundiced with scleral icterus and conjunctival pallor present bilaterally.
            - Cardiac auscultation revealed tachycardia and an S3 gallop. 
            Given these findings, his doctor decided to order a series of laboratory tests to try to determine the cause of his illness.`,
            questions: [
                {
                    question: `What is your differential diagnosis for these findings?`,
                    answer: `Hemolytic anemia, given present of splenomegaly and jaundice 
                    Acute infection or liver/gallbladder disease in the presence of anemia, such as hepatitis, EBV, etc.`
                },
                {
                    question: `What initial labs would you order to work up your differential diagnosis?`,
                    answer: `Complete blood count to assess for anemia, infection
                    Peripheral blood smear to assess for hemolysis, RBC infections, other abnormality 
                    Liver function tests to assess for bilirubinemia, liver disease, hemolysis (whether intravascular or extravascular)
                    Reticulocyte count to assess hemolysis 
                    lactate dehydrogenase, haptoglobin to assess hemolysis`
                }
            ]
        },
        'Labratory Workup': {
            labs: [
                {
                    type: 'Complete Blood Count',
                    results: `White blood cell count: 16.5 x 10³/uL (normal range: 4.5-11 x 10^3/uL)
                    Red blood cell count: 3.9 x 10⁶/uL (normal range: 4.7-6.1 x 10^6/uL)
                    Mean corpuscular volume (MCV): 80 fL (normal range: 80-100 fL)
                    Hemoglobin: 10.1 g/dL (normal range: 13.8-17.2 g/dL)
                    Reticulocyte Count: 4.5% (normal range: 0.6–2.6%) 
                    `
                },
                {
                    type: 'Liver Function Panel',
                    results: `Alanine transaminase (ALT): 200 IU/L (normal range: 7-56 IU/L)
                    Aspartate transaminase (AST): 300 IU/L (normal range: 8-48 IU/L)
                    Indirect bilirubin: 7.5 mg/dL (normal range: 0.3-1.2 mg/dL)
                    Lactase dehydrogenase (LDH): 1000 IU/L (normal range: 100-190 IU/L)
                    Haptoglobin: 10 mg/dL (normal range: 30-200 mg/dL)
                    `
                },
                
            ],
            paragraphs: `In light of these findings, Barry’s doctor also ordered a peripheral blood smear which revealed Babesia organisms arranged in a tetrad (known as a Maltese cross) after utilizing Wright-Giemsa staining. This alone would be enough to establish the diagnosis, but a PCR (polymerase chain reaction) was also ordered which confirmed the definitive diagnosis.
            This tick-borne infection also comes with a high risk of co-infection with other species, so testing for Borrelia burgdeforia was done.
            To understand the severity of his diagnosis, Barry's doctor ordered an MRI (magnetic resonance imaging) of his chest to look for any abnormalities in his heart or lungs. Luckily his lungs were normal. There was notable splenomegaly, however. 
            `,
            questions: [
                { 
                    question: `Provide a differential diagnosis for the lab workup.`,
                    answer: `Hemolytic anemia, because normocytic anemia is present, haptoglobin is low, LDH is high, and reticulocytes are high. 
                    Infection of RBCs, babesiosis or malaria
                    Liver/hepatocyte damage/injury/infection`
                },
                {
                    question: `What is the diagnosis?`,
                    answer: `Babesiosis`
                },
                {
                    question: `The genus Babesia infect which cells preferentially?`,
                    answer: `Red blood cells`,
                },
                {
                    question: `What signs and symptoms would raise the suspicion of Lyme disease?`,
                    answer: `Bull's-eye rash (erythema migrans)
                    Fever
                    Headache
                    Fatigue
                    Muscle and joint aches`
                },
                {
                    question: `What cardiorespiratory complications are associated with his condition? `,
                    answer: `ARDS, myocarditis, pulmonary edema, heart failure`
                },
                {
                    question: `What other complications?`,
                    answer: `Renal failure, sepsis, seizures, anemia`
                },
                {
                    question: `Given Barry’s splenomegaly, what complications should he be warned about?`,
                    answer: `Splenic rupture`
                }
            ],
        }, 
        'Treatment Plan': {
            paragraphs: `Barry's treatment plan for babesiosis included a combination of medications, such as atovaquone and azithromycin, to help manage the infection. In cases of severe anemia, a blood transfusion may also be necessary. 
            To help minimize his risk of splenic rupture, Barry's doctor has advised him to take it easy and avoid strenuous activity. They also provided him with information about babesiosis and the potential complications to watch out for, in case his symptoms worsen and he needs to seek emergency care.`,
            questions: [
                {
                    question: `What pharmacological classes do these drugs belong to?`,
                    answer: `Atovaquone is a naphthoquinone. Azithromycin is a broad spectrum, macrolide antibiotic.`
                },
                {
                    question: `Using a medical resource, write a prescription for Barry with specific dosages.`,
                    answer: `Azithromycin 1000 mg by mouth daily for 10 days. 
                    Atovaquone 750 mg by mouth twice daily for 10 days.`
                }
            ]
        },
        'Conclusion': {
            paragraphs: `Barry followed his treatment plan and, after several weeks, began to feel much better. His energy levels improved, and his fever and muscle aches disappeared. 
            Despite his full recovery, Barry was still devastated. He had always been so careful to avoid ticks, but somehow he had still managed to get bitten. From that moment on, he developed a fierce phobia of ticks. The next time he went hiking, Barry showed up in a full hazmat suit. His friends laughed at him, but Barry didn't care. As the years passed, they came to understand that this was just Barry's way of coping with his phobia. And in the end, they couldn't help but respect him for it.`,
            questions: []
        },
    },
}

const DB = [
    barry
]

const filterDB = (database, param, string) => {
    return database.filter(obj => obj?.[param] === string)[0];
}

const tgt = filterDB(DB, 'patient', 'Barry');
const patientChart = tgt.chart;


// returns formatted patient name string with object data
const patientName = (TARGET) => {
    return `${TARGET.patient}, ${TARGET.age} year old ${TARGET.sex.toLowerCase()}`
}

// will take in the block of text copied from the pdf, and create an array for easy DOM rendering without excess spaces or empty strings
function stringToArray(text) {
    return text.split('\n').map(paragraph => paragraph.trim()).filter(str => str !== '');
}

// takes in the string, removes unneccessary characters/words, and creates an array of individual keywords
function answerToKeywords(text) {
    // translate text to all lowercase characters
    text = text.toLowerCase();

    // remove sentence structure words and line breaks
    text = text.replace(/([^a-zA-Z ])/g, '').replace(/\b(his|such|given|well|etc|due|is|when|than|it|also|with|and|as|but|for|in|of|on|or|the|to|he|she|was|an|a|but|had|that)\b/g, '').replace(/\n/g, '');
    
    // remove excess spacing
    text = text.replace(/\s+/g, ' ').trim();
    
    // split text into array of individual words
    return text.split(' ');
}

// takes in the string that will be inputted from copy/paste, and creates a renderable array for the virtual DOM
function formatLabResults(text) {
    let arr = text.split('\n');
    return arr.map(str => str.trim().replace(/\s+/g, ' ')).filter(str => str !== '');
}

// will provide lab data from an indivudal lab
function renderLab(individualLab) {
    // if no individualLab is provided, it will automatically render the example.
    if (!individualLab) { individualLab = tgt.chart?.['Labratory Workup'].labs[1]; console.log('No lab found... rendering example')};
    return {
        name: patientName(tgt),
        type: individualLab.type,
        results: formatLabResults(individualLab.results)
    }
}

function renderAllLabs() {
    return tgt.chart?.['Labratory Workup'].labs.map(lab => {
        return renderLab(lab)
    });}

// console.log(testDB());
// console.log(patientName());
// console.log('objects', answerToKeywords(tgt.chart['Symptom Onset']?.questions[1].answer));
// console.log('HAY', answerToKeywords(tgt?.chart?.['Physical Exam']?.questions[0].answer))
// console.log(splitIntoParagraphs(tgt?.chart?.['Physical Exam'].paragraphs))

// console.log(formatLabResults(tgt.chart?.['Labratory Workup'].labs[0].results))
// console.log(renderLab())
// console.log(renderAllLabs())