import styles from './App.module.css';
import Landing from './components/organism/landing';
import TermsAndConditions from './components/pages/TermsAndConditions';
import Footer from './components/molecule/footer'; // Import Footer component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app__outer}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        {/* Include Footer component here so it's present on every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
