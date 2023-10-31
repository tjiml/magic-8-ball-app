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
      }, 2500);

      reset.style.display = 'inline';
      reveal_answer_btn.style.display = 'none';
    }

  }

  function reset() {

    window.location.reload();

  }

  function shake() {
    // const magic_ball = document.querySelector('.magic-ball-image');
    const magic_ball = document.querySelector('.magic-ball-container');
    const user_input = document.querySelector('.user-input');
    const error = document.querySelector('.error-text');

    if (user_input.value === "") {
      error.innerHTML = 'ENTER QUESTION!';
    } else {
      magic_ball.style.animation = 'shake 0.5s';
      magic_ball.style.animationIterationCount = '3';
      error.innerHTML = ""
    }
  }

  return (
    <>
    <div className="container">

      <h1 className="title">welcome to the magic 8-ball</h1>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png" className="magic-ball-image"/> */}
        <div className="magic-ball-container">
            <div className="triangle-container">
              <h1 className="answer"></h1>
            </div>
        </div>
        
        <p className="error-text"></p>
        <input type="text" className="user-input" placeholder="ASK A QUESTION"/>
        <button className="reveal-answer-btn" 
          onClick={reveal_answer}
          onMouseDown={shake}>SHAKE BALL</button>
        <button className="new-question-btn"
          onClick={reset}>ask new question</button>
     
    </div>
    </>
  )
}