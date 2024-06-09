import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import Inline from './components/inline/inline.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <Inline></Inline>
    </>
  );
}
