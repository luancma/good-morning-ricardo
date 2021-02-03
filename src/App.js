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
    console.log(getStringWithDay())
    Axios.get(`https://www.googleapis.com/customsearch/v1?q=${getStringWithDay()}&key=AIzaSyDmsMFexOfkWb8ReBWbe6iT-z-gy3Q9XQ4&cx=5d3148e9b4ad36fa6&start=${getRandomIntInclusive(1, 3)}`)
    .then(response => {
      const url = response.data.items[getRandomIntInclusive(1, 10)].pagemap.cse_image[0].src
      setImageUrl(url)
    })
  }, [])

  return (
    <div style={{
      display: "flex",
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {!image ? (
        <h1>Carregando</h1>
      ): (
        <StateReact imageProps={image} stageSizes={stageSizes}/>
      )}
    </div>
  );
}
export default App;
