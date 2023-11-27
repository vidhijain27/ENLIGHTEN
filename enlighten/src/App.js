import './App.css';

//components

import Login from './components/account/Login';

function App() {
  return (
    <div style={{ 

      backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b1a74a3-9698-46dc-b46c-af87969a373e/d253v6b-cd51507a-49f5-48b1-b9cc-3ce33d3c4b5d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiMWE3NGEzLTk2OTgtNDZkYy1iNDZjLWFmODc5NjlhMzczZVwvZDI1M3Y2Yi1jZDUxNTA3YS00OWY1LTQ4YjEtYjljYy0zY2UzM2QzYzRiNWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GgoyWBi3OURvf3n3AOLeFqC3PNSLnbEIQKQRH7rbjDw")`,
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
      
      }}>
      <Login />
    </div>
  );
}

export default App;
