import { React, useState} from 'react';
import './App.css';
import Tasks from './Components/Tasks';
import NewTask from "./Components/NewTask";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  const [addTask, setAddTask] = useState(false);

  const newTask = (task) => {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newT = { id, ...task};
      setTasks([...tasks, newT]);
  }

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Do homework',
          deadline: '2020-09-07',
          completed: false
      },
      {
          id: 2,
          text: "Doctor's appointment",
          deadline: '2020-04-27',
          completed: false
      },
      {
          id: 3,
          text: 'Send email',
          deadline: '2020-03-15',
          completed: false
      },
    ])

    const deleteHandler = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    const completeHandler = (id) => {
      setTasks(tasks.map((task) => task.id === id
       ? {...task, completed: !task.completed } : task))
    }

    let numTasks = tasks.length;
    let numCompletedTasks = tasks.filter((task) => task.completed === true).length;
    let percentage = Math.floor(numCompletedTasks/numTasks * 100);

  return (
    <>
      <Header/>
      <h1 className="cong">Congratulations, you've completed: </h1>
      <div className="percentage">
          <p className="perc">{percentage}%</p>
      </div>
      <div className="btn">
          <button
              className="add-task-btn"
              onClick={() => setAddTask(!addTask) }>Add Task</button>
      </div>
        {addTask ? <NewTask onAdd={newTask}/> : ''}
        <div className="description">
            <h2 className="to-do">To Do</h2>
            <h2 className="compl">Completed</h2>
        </div>
        <Tasks
        tasks={tasks}
        onDelete={deleteHandler}
        onComplete={completeHandler}/>

        <Footer/>
    </>

  );
}

export default App;
