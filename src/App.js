import React from 'react';
import useImage from 'use-image';
import StateReact from './components/konva';
import Axios from 'axios';

function App() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [stageSizes, setStageSizes] = React.useState({
    width: 0,
    height: 0
  })
  const [image] = useImage(imageUrl)

  
  React.useEffect(() => {
    if(image){
      setStageSizes({
        width: image.width,
        height: image.height
      })
    }
  }, [image])
  

  // utils
  function getStringWithDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "domingo";
    weekday[1] = "segunda&feira";
    weekday[2] = "terça&feira";
    weekday[3] = "quarta&feira";
    weekday[4] = "quinta&feira";
    weekday[5] = "sexta&feira";
    weekday[6] = "sábado";
  
    return `bom%20dia%20${weekday[d.getDay()]}`;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  React.useEffect(() => {
    const url = "https://backend-ricardo.herokuapp.com"
    Axios.get(url).then(response => {
      setImageUrl(response.data.urlPath)
    })
   
  }, [])

  return (
    <div style={{
      display: "flex",
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {!imageUrl ? (
        <h1>Carregando</h1>
      ): (
        <>
        <StateReact imageProps={image} stageSizes={stageSizes} img={imageUrl}/>
        </>
      )}
    </div>
  );
}
export default App;
