import React, { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState(null);

  useEffect(() => {
    //fetch('APIのエンドポイントを記述')
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=1002f3ad4f6610406fa196aa0e0b2274')
      .then(response => response.json())
      .then(data => setTask(data.results))
      .catch(error => console.error("Fetching data failed", error));
  }, []);// 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>Task Information</h1>
      <p>Title: {task.title}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}
export default App;
