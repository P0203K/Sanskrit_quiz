// Define your questions and options
const quizData = [
    {
      question: 'Question 1',
      image: 'images\\1.png',
      options: ['Ûma‘²', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
        question: 'Question 2',
        image: 'images\\2.png',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Question 3',
        image: 'images\\3.png',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        answer: 0 // Index of the correct option
      },
    //   {
    //     question: 'Question 4',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\4.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 5',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\5.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 6',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\6.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 7',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\7.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 8',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\8.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 9',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\9.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 10',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\10.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 11',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\11.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 12',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\12.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 13',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\13.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 14',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\14.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 15',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\15.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 16',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\16.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 17',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\17.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 18',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\18.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 19',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\19.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    //   {
    //     question: 'Question 20',
    //     image: 'C:\\Users\\Preeti Khamkar\\OneDrive\\Desktop\\vidhi_quiz\\images\\20.png',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     answer: 0 // Index of the correct option
    //   },
    // Add more questions similarly
  ];
  
  let score = 0; // Initialize score
  const userAnswers = []; // Array to store user's selected answers
  
  // Function to load a question
  function loadQuestion(index) {
    const question = quizData[index];
    document.getElementById('question-image').src = question.image;
  
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options
  
    question.options.forEach((option, i) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => {
        checkAnswer(i, index);
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
      alert('Incorrect. Try Again!');
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
  
  // Define your questions and options