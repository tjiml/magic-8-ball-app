import React from "react";

export default function App() {

  const fortune_answers = ['not a chance', 'absolutely', 'of course', 'signs pointing to no', 'i say nay nay', '100% yes', '100% no', 'not happening', 'forsure', 'very likely', 'without a freaking doubt'];

  function number_generator() {
    let random_number = Math.floor(Math.random() * fortune_answers.length);
    return fortune_answers[random_number];
  }

  function reveal_answer() {

    const answer = document.querySelector('.answer');
    const user_input = document.querySelector('.user-input');
    const reset = document.querySelector('.new-question-btn');
    const reveal_answer_btn = document.querySelector('.reveal-answer-btn');


    if (user_input.value === "") {
      answer.innerHTML = ""
    } else {
      setTimeout(() => {
        answer.innerHTML = number_generator();
        answer.style.opacity = '1';
      }, 2000);

      reset.style.display = 'inline';
      reveal_answer_btn.style.display = 'none';
    }

  }

  function reset() {

    const answer = document.querySelector('.answer');
    const user_input = document.querySelector('.user-input');
    const reset = document.querySelector('.new-question-btn');
    const reveal_answer_btn = document.querySelector('.reveal-answer-btn');
    const magic_ball = document.querySelector('.magic-ball-image');

    magic_ball.style.transform = 'translateY(0)';
    answer.innerHTML = "";
    user_input.value = "";
    reset.style.display = 'none';
    reveal_answer_btn.style.display = 'inline';

  }

  function shakeBallUp() {
    const magic_ball = document.querySelector('.magic-ball-image');

    magic_ball.style.transform = 'translateY(-40px)';
  }

  // function shakeBallDown() {
  //   const magic_ball = document.querySelector('.magic-ball-image');

  //   magic_ball.style.transform = 'translateY(0)';
  // }

  return (
    <>
    <div className="container">

      <h1 className="title">welcome to the magic 8-ball</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png" className="magic-ball-image"/>
        
        <input type="text" className="user-input" placeholder="ASK A QUESTION"/>
        <button className="reveal-answer-btn" 
          onClick={reveal_answer}
          onMouseDown={shakeBallUp}>SHAKE BALL</button>
        <button className="new-question-btn"
          onClick={reset}>ask new question</button>
        <h1 className="answer">hello</h1>
     
    </div>
    </>
  )
}