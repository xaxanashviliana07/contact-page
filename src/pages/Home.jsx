import Header from '../components/Header.jsx'
import {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/menus');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

  return (
      <div>
          <Header/>
          <img src="http://localhost:5000/images/1.png" alt="test"/>
          <img src="http://localhost:5000/images/2.png" alt="test"/>
          <img src="http://localhost:5000/images/3.png" alt="test"/>
          <img src="http://localhost:5000/images/6.png" alt="test"/>
          <img src="http://localhost:5000/images/5.png" alt="test"/>
          <h1>asd</h1>

      </div>
  )
}

export default Home
