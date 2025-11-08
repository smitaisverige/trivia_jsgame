const quizGame = () => {
  const harrypotterQuestions = [
    { question: "Which of the following wizards was one of the founders of Hogwarts?", 
      options: ["A: Rowena Ravenclaw", "B: Newt Scamander", "C: Severus Snape", "D: Albus Dumbledore"], 
      answer: "A" },
    { question: "What spell is used to disarm another wizard?", 
      options: ["A: Alohomora", "B: Wingardium Leviosa", "C: Expelliarmus", "D: Expecto Patronum"], 
      answer: "C" },
    { question: "When was the first Harry Potter book published?", 
      options: ["A: 1996", "B: 1997", "C: 1995", "D: 1998"], 
      answer: "B" },
    { question: "What is the name of the candy store near Hogwarts?", 
      options: ["A: Honeydukes", "B: Olivanders", "C: Flourish and Blotts", "D: Harrods"], 
      answer: "A" },
    { question: "Which spell did Harry use to kill Lord Voldemort?", 
      options: ["A: Avada Kedavra", "B: Cruciatus Curse", "C: Stupefy", "D: Expelliarmus"], 
      answer: "D" }
  ];

  const dcQuestions = [
    { question: "What is the name of the city where Batman operates?", 
      options: ["A: Central City", "B: Gotham City", "C: Metropolis", "D: Star City"], 
      answer: "B" },
    { question: "What is Superman's Kryptonian name?", 
      options: ["A: Bruce Wayne", "B: Kal-El", "C: Barry Allen", "D: Hal Jordan"], 
      answer: "B" },
    { question: "What is the name of the Green Lantern's power-granting ring?", 
      options: ["A: Invisibility Ring", "B: Speed Ring", "C: Teleportation Ring", "D: Power Ring"], 
      answer: "D" },
    { question: "Who is the Flash's arch-nemesis?", 
      options: ["A: Brainiac", "B: Doomsday", "C: The Reverse Flash", "D: Darkseid"], 
      answer: "C" },
    { question: "What does the \"DC\" in DC Comics stand for?", 
      options: ["A: Detective Comics", "B: Danger Comics", "C: Dynamic Characters", "D: Daring Comics"], 
      answer: "A" }
  ];

  const marvelQuestions = [
    { question: "Who is Iron Man?", 
      options: ["A: Steve Rogers", "B: Tony Stark", "C: Bruce Banner", "D: Peter Parker"], 
      answer: "B" },
    { question: "What is Thor's weapon?", 
      options: ["A: Shield", "B: Sword", "C: Hammer", "D: Bow"], 
      answer: "C" },
    { question: "Who is the villain in Avengers: Infinity War?", 
      options: ["A: Loki", "B: Ultron", "C: Red Skull", "D: Thanos"], 
      answer: "D" },
    { question: "Which hero turns green when angry?", 
      options: ["A: Spider-Man", "B: Hulk", "C: Ant-Man", "D: Doctor Strange"], 
      answer: "B" },
    { question: "Who leads the Avengers?", 
      options: ["A: Captain America", "B: Black Widow", "C: Iron Man", "D: Hawkeye"], 
      answer: "A" }
  ];

  const categories = [harrypotterQuestions, dcQuestions, marvelQuestions];
  const categoryNames = ["Harry Potter Movies", "DC Movies", "Marvel Movies"];

  let playerName = prompt("Enter your name:");
  if (!playerName) {
    alert("Game cancelled. Please click Start Quiz again and enter a name.");
    return;
  }
  playerName = playerName.trim().toUpperCase();

  alert(`Welcome, ${playerName}! We have a fun short movie trivia quiz designed for you! You have to answer 5 questions on any one of the movie universes we select for you! Let's see if you are a brainy wizard, a marvelous superhero, or a disguised vigilante!`);

  let playAgain = true;

  while (playAgain) {
    const categoryIndex = Math.floor(Math.random() * categories.length);
    const selectedCategory = categories[categoryIndex];
    const selectedCategoryName = categoryNames[categoryIndex];

    alert(`📚 Today's quiz category is: ${selectedCategoryName}`);

    let score = 0;

    for (let i = 0; i < selectedCategory.length; i++) {
      const currentQuestion = selectedCategory[i];
      let userAnswer = null;

      while (true) {
        let promptText = `Question ${i + 1}: ${currentQuestion.question}\n\n${currentQuestion.options.join("\n")}\n\nEnter A, B, C, or D:`;
        userAnswer = prompt(promptText);

        if (userAnswer === null) {
          alert("Quiz cancelled. Goodbye!");
          return;
        }

        userAnswer = userAnswer.trim().toUpperCase();

        if (["A", "B", "C", "D"].includes(userAnswer)) {
          break;
        } else {
          alert("Invalid input. Please enter A, B, C, or D.");
        }
      }

      if (userAnswer === currentQuestion.answer) {
        alert("✅ Correct!");
        score++;
      } else {
        alert(`❌ Incorrect! The correct answer was: ${currentQuestion.answer}`);
      }
    }

    let titleMessage = "";
    if (score === 5) {
      titleMessage = (`${playerName} 🌟 You are a \"SAVANT\" about 📚 ${selectedCategoryName} Universe! \n 🏆 Thanks for playing.`);
    } else if (score === 4) {
      titleMessage = (`${playerName} 💪 You are an \"EXPERT\" about 📚 ${selectedCategoryName} Universe! \n 🏆 Thanks for playing.`);
    } else if (score === 3) {
      titleMessage = (`${playerName} 💪 You are an \"MASTER\" about 📚 ${selectedCategoryName} Universe! \n 🏆 Thanks for playing.`);
    } else {
      titleMessage = "👍 Keep up! You're learning fast!";
    }

    alert(`🎬✨ QUIZ RESULTS ✨🎬
   🧠 Your Score: ${score} / ${selectedCategory.length}
    ${titleMessage}`);

    let again = prompt("Do you want to play another quiz? (Y/N)");
    if (!again || again.trim().toUpperCase() !== "Y") {
      playAgain = false;
      alert("Thanks for playing! See you next time.");
    }
  }
};

