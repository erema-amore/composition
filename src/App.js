import Comment from './components/Comment';
import './App.css';

function App() {
  const user = {
    author: {
      avatarUrl: 'https://wallpapers.com/images/hd/kitty-cat-pictures-2880-x-1800-ku5tkktvnjys6m5r.jpg',
      name: 'Heloo Kitty'
    },
    text: 'I hope you enjoy learning React',
    date: new Date()
  }
  
  return (
    <div className="App">
      
     <Comment author={user.author} text={user.text} date={user.date}/>
    </div>
  );
}

export default App;
