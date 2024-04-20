/*
As the first React problem, you are asked to create the famous Counter app.

counter starts from 0.
click the '+' button to increment.
click the '-' button to decrement.
data-testid is used to test your code, please do not remove them.

*/

import React, { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button data-testid='decrement-button' onClick={() => setCount(count - 1)}>
        -
      </button>
      <button data-testid='increment-button' onClick={() => setCount(count + 1)}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  )
}

// run your code by clicking the run button on the right
