import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayOfTasks = ['Aprender React', 'Consertar meu github', 'Aprender espanhol'];
function ReturningTasks(value) {
  return value.map((li) => Task(li));
}
function App() {
  return (
    <div className="App">
      <h1>Tarefas do dia</h1>
      {Task('Começando o dia')}
      {ReturningTasks(arrayOfTasks)}
    </div>
  );
}

export default App;
