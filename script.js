// Define your questions and options
const quizData = [
    {
      question: 'Question 1',
      image: 'images\\1.png',
      options: ['द्वारम्', 'द्वार', 'द्वारं', 'दरवारम्'],
      answer: 0 // Index of the correct option
    },
    {
        question: 'Question 2',
        image: 'images\\2.png',
        options: ['रङ्गवल्ली', 'रङ्गवली', 'रङ्गवल्लि', 'रंगवल्लि'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 3',
        image: 'images\\3.png',
        options: ['पादकटः', 'पादकाटः', 'पदकटः', 'पादकटम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 4',
        image: 'images\\4.png',
        options: ['प्रधानकक्ष', 'प्रधानकषः', 'प्राधानकक्ष:', 'प्रधानकक्षम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 5',
        image: 'images\\5.png',
        options: ['जवनिका', 'जवनीका', 'जवनिकः', 'जावनिका'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 6',
        image: 'images\\6.png',
        options: ['पर्यङ्क', 'पर्यङ्कम्', 'पर्यंक:', 'परयङ्क'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 7',
        image: 'images\\7.png',
        options: ['तल्प:', 'तल्प', 'तलपः', 'तलावः'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 8',
        image: 'images\\8.png',
        options: ['उपधानम्', 'उपाधानम्', 'उपधानः', 'उपाधनम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 9',
        image: 'images\\9.png',
        options: ['आच्छादकम्', 'अच्छादकम्', 'आच्छदकम्', 'आच्छदकम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 10',
        image: 'images\\10.png',
        options: ['समीकर:', 'समिकर', 'समीकरम्', 'सामीकर:'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 11',
        image: 'images\\11.png',
        options: ['क्षालनयन्त्रम्', 'क्षालनयन्त्रः', 'क्षलनयन्त्रम्', 'क्षलनयन्त्रः'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 12',
        image: 'images\\12.png',
        options: ['पुष्पाधानी', 'पुष्पाधानि', 'पुष्पादानी', 'पुश्पाधानी'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 13',
        image: 'images\\13.png',
        options: ['पाकशाला', 'पाकशालाः', 'पाकंशाला', 'पाकशालम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 14',
        image: 'images\\14.png',
        options: ['वायुचुल्ली:', 'वायुचुल्ली', 'वायुचुल्लि', 'वायुचुलि'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 15',
        image: 'images\\15.png',
        options: ['भोजनपीठम्', 'भोजनपीठं', 'भोजनपिठम्', 'भोजनपिठः'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 16',
        image: 'images\\16.png',
        options: ['पात्रम्', 'पात्रं', 'पात्रः', 'पत्रम्'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 17',
        image: 'images\\17.png',
        options: ['दर्वी', 'दरवी', 'दर्वि', 'दरवि'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 18',
        image: 'images\\18.png',
        options: ['मिश्रक:', 'मिश्रकम्', 'मीश्रक', 'मीश्रकं'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 19',
        image: 'images\\19.png',
        options: ['स्थालिका', 'स्थालीका', 'स्थालिकाः', 'स्थालिः'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 20',
        image: 'images\\20.png',
        options: ['कटाह', 'कटाहं', 'कटाहम्', 'काटाह:'],
        answer: 0 // Index of the correct option
      },
    // Add more questions similarly
  ];
  
  let score = 0; // Initialize score
const userAnswers = []; // Array to store user's selected answers

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the quizData array to randomize the questions
shuffleArray(quizData);

// Function to load a question with shuffled options
function loadQuestion(index) {
  const question = quizData[index];
  document.getElementById('question-image').src = question.image;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ''; // Clear previous options

  // Shuffle the options before displaying
  const shuffledOptions = [...question.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach((option, i) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => {
      checkAnswer(question.options.indexOf(option), index);
    });
    optionsContainer.appendChild(optionElement);
  });
}

// Function to check the answer
function checkAnswer(selectedIndex, questionIndex) {
  const correctIndex = quizData[questionIndex].answer;
  if (selectedIndex === correctIndex) {
    score++; // Increment score if the answer is correct
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
  // Store user's answer
  userAnswers[questionIndex] = selectedIndex;
  
  // Move to the next question or display the score
  if (questionIndex < quizData.length - 1) {
    loadQuestion(questionIndex + 1);
  } else {
    displayScore();
  }
}

// Function to display the score
function displayScore() {
  alert(`Quiz Completed!\nYour Score: ${score}/${quizData.length}`);
  const reviewOption = confirm('Would you like to review your answers?');
  if (reviewOption) {
    removeLastQuestion();
    reviewAnswers();
  }
}

// Function to remove the last question from the screen
function removeLastQuestion() {
  const lastQuestionContainer = document.querySelector('.quiz-container');
  lastQuestionContainer.style.display = 'none';
}

// Function to review answers
function reviewAnswers() {
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review-container');

  quizData.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('review-question');
    questionDiv.innerHTML = `
      <p><strong>Question ${index + 1}:</strong></p>
      <img src="${question.image}" alt="Question Image">
      <p><strong>Correct Answer:</strong> ${question.options[question.answer]}</p>
      <p><strong>Your Answer:</strong> ${question.options[userAnswers[index]]}</p>
    `;
    reviewContainer.appendChild(questionDiv);

    // Add a horizontal line between questions
    if (index !== quizData.length - 1) {
      const line = document.createElement('hr');
      reviewContainer.appendChild(line);
    }
  });

  // Remove the quiz container from the screen
  document.querySelector('.quiz-container').style.display = 'none';

  document.body.appendChild(reviewContainer);
}

// Load the first question when the page loads
loadQuestion(0);