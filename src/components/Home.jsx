import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleclick() {
    navigate('/about');
  }
  return (
    <div>
      Home Page
      <button onClick={handleclick}>Move to about page</button>
    </div>
  );
};

export default Home;
