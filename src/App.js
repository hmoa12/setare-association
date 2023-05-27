import { useEffect, useState } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import Main from './components/Main';
import './App.css';
import Layout from './components/Layout';
import { content } from './data/content';



function App() {
  const [language, setLangugae] = useState('English')
  const [contents, setContents] = useState(content[1].english)
  useEffect(() => {
    
    if(language === "Persian") {
      setContents(content[0].persian)
    } else if (language === "English") {
      setContents(content[1].english)
    } else {
      setContents(content[2].portuegues)
    }
  }, [language])

  return (
    <div className="App">
        <LanguageContext.Provider value={{language, setLangugae}}>
          <Layout>
              <Main
                contents={contents}
              />
          </Layout>
        </LanguageContext.Provider>
    </div>
  );
}

export default App;
