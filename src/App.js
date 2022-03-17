import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'
import Cookies from 'universal-cookie';

function App() {
  
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialURL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch((Error) => console.log(Error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    const cookiestores = new Cookies();
    console.log(`This is the stored cookie: ${cookiestores.get('reactfromblog')}`)
    const cookies = new Cookies();
    cookies.set('reactfromblog', 'this_works', {path: '/'});
  }, [])
  

  useEffect(() => {
    fetchCharacters(initialURL);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty API Web App"/>
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;