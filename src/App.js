import { h } from 'preact';
import Headroom from './Headroom';
import './styles.css';

const App = () => {
  return (
    <div>
      <Headroom>
        <header>
          <h1>React-Headroom Preact App</h1>
        </header>
      </Headroom>
      <main>
        {Array(50).fill().map((_, i) => (
          <p key={i}>Scroll down to see the header hide and show.</p>
        ))}
      </main>
    </div>
  );
};

export default App;
