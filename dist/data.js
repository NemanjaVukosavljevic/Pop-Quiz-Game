// EXPORT NA DNU
let randomQuestionsArray = [];

function shuffleArray(array) {
    let indices = Array.from({ length: array.length }, (_, i) => i);

    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    randomQuestionsArray = indices;
}

let quizQuestions = [
    {
        id: 0,
        question: `In the UK, the abbreviation NHS stands for National what Service?`,
        answers: [`Humanity`, `Health`, `Honour`, `Household`],
        correctIndex: 1,
    },
    {
        id: 1,
        question: `Which Disney character famously leaves a glass slipper behind at a royal ball?`,
        answers: [`Pocahontas`, `Sleeping Beauty`, `Cinderella`, `Elsa`],
        correctIndex: 2,
    },
    {
        id: 2,
        question: `Which of these brands was chiefly associated with the manufacture of household locks?`,
        answers: [`Phillips`, `Flymo`, `Chubb`, `Ronseal`],
        correctIndex: 2,
    },
    {
        id: 3,
        question: `The hammer and sickle is one of the most recognisable symbols of which political ideology?`,
        answers: [`Republicanism`, `Communism`, `Conservatism`, `Liberalism`],
        correctIndex: 1,
    },
    {
        id: 4,
        question: `Which toys have been marketed with the phrase “robots in disguise”?`,
        answers: [`Bratz Dolls`, `Sylvanian Families`, `Hatchimals`, `Transformers`],
        correctIndex: 3,
    },
    {
        id: 5,
        question: `What does the word loquacious mean?`,
        answers: [`Angry`, `Chatty`, `Beautiful`, `Shy`],
        correctIndex: 1,
    },
    {
        id: 6,
        question: `Obstetrics is a branch of medicine particularly concerned with what?`,
        answers: [`Childbirth`, `Broken bones`, `Heart conditions`, `Old age`],
        correctIndex: 1,
    },
    {
        id: 7,
        question: `In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?`,
        answers: [`Bow-tie, braces and tweed jacket`, `Wide-brimmed hat and extra long scarf`, `Pinstripe suit and trainers`, `Cape, velvet jacket and frilly shirt`],
        correctIndex: 1,
    },
    {
        id: 8,
        question: `What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?`,
        answers: [`Hangar`, `Terminal`, `Concourse`, `Carousel`],
        correctIndex: 3,
    },
    {
        id: 9,
        question: `Which of these religious observances lasts for the shortest period of time during the calendar year?`,
        answers: [`Ramadan`, `Diwali`, `Lent`, `Hanukkah`],
        correctIndex: 1,
    },
    {
        id: 10,
        question: `At the closest point, which island group is only 50 miles south-east of the coast of Florida?`,
        answers: [`Bahamas`, `US Virgin Islands`, `Turks and Caicos Islands`, `Bermuda`],
        correctIndex: 0,
    },
    {
        id: 11,
        question: ` Construction of which of these famous landmarks was completed first?`,
        answers: [`Empire State Building`, `Royal Albert Hall`, `Eiffel Tower`, `Bermuda`],
        correctIndex: 0,
    },
    {
        id: 12,
        question: `Which of these cetaceans is classified as a “toothed whale”?`,
        answers: [`Gray whale`, `Gray whale`, `Sperm whale`, `Humpback whale`],
        correctIndex: 2,
    },
    {
        id: 13,
        question: `Who is the only British politician to have held all four “Great Offices of State” at some point during their career?`,
        answers: [`David Lloyd George`, `Harold Wilson`, `James Callaghan`, `John Major`],
        correctIndex: 2,
    },
    {
        id: 14,
        question: `In 1718, which pirate died in battle off the coast of what is now North Carolina?`,
        answers: [`Calico Jack`, `Blackbeard`, `Bartholomew Roberts`, `Captain Kidd`],
        correctIndex: 1,
    },
    {
        id: 15,
        question: `What sort of animal is Walt Disney's Dumbo?`,
        answers: [`Deer`, `Rabbit`, `Elephant`, `Donkey`],
        correctIndex: 0,
    },
    {
        id: 16,
        question: `At a restaurant, someone who "foots the bill" does what?`,
        answers: [`Kisses it`, `Rips it up`, `Hopes to get lucky`, `Pays it`],
        correctIndex: 3,
    },
    {
        id: 17,
        question: `In which of these films does Whoopi Goldberg dress up as a nun?`,
        answers: [`Sister Act`, `Ghost`, `The Color Purple`, `How Judas Got His Groove Back`],
        correctIndex: 0,
    },
    {
        id: 18,
        question: `If someone asked to see your ID, what might you show them?`,
        answers: [`Your tongue`, `Your teeth`, `Your passport`, `The door`],
        correctIndex: 2,
    },
    {
        id: 19,
        question: `According to a common phrase, a person who takes chances is "going out on a" what?`,
        answers: [`Limb`, `Horse`, `Skateboard`, `Nude beach`],
        correctIndex: 0,
    },

]

shuffleArray(quizQuestions);


export { quizQuestions, randomQuestionsArray, shuffleArray };