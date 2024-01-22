import { Link, Outlet } from 'react-router-dom'; 

function App() {
  return (
    <div className="container mt-3">
      <Link to="/">
        <h1 className="text-center">Pokedex en React</h1>
      </Link>

      <Outlet />
    </div>
  );
}

export default App;
