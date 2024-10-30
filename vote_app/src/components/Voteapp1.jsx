import React, { useState } from "react";

function Voteapp1() {
  const [vote, setVote] = useState([0, 0, 0]);

  function count1() {
    setVote([vote[0] + 1, vote[1], vote[2]]);
  }
  function count2() {
    setVote([vote[0], vote[1] + 1, vote[2]]);
  }

  function count3() {
    setVote([vote[0], vote[1], vote[2] + 1]);
  }

  return (
    <div className="div1" >
      <section className="sec1">
        <h1>Party A : Votes {vote[0]}</h1>
        <h1>Party B : Votes {vote[1]}</h1>
        <h1>Party C : Votes {vote[2]}</h1>
      </section>

      <section className="sec2">
        <button onClick={count1} className="b1">
          Vote
        </button>

        <button onClick={count2} className="b1">
          Vote
        </button>

        <button onClick={count3} className="b1">
          Vote
        </button>
      </section>
    </div>
  );
}

export default Voteapp1;
