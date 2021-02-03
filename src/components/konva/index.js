import Konva from 'konva';
import React from 'react'
import { Stage, Layer, Rect, Text , Image} from 'react-konva';

const TextComponent = ({ textString, imageDetails }) => {
    return (
       <Text 
            width={imageDetails.width}
            y={imageDetails.height}
            align="center"
            text={textString}
            fontSize="42"
            drawBorder
        />
    )
} 

const StateReact = ({ imageProps, stageSizes }) => {

    const stageRef = React.useRef()

    function downloadURI(uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }


    
    const donwloadImage = () => {
        var canvas = stageRef.current.canvas._canvas

        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
        
        console.log(image)
        // window.location.href=image; // it will save locally

        // console.log(dataURL)
        // downloadURI(dataURL, 'stage.jpeg');
    }

    return (
        <div>
        <Stage width={stageSizes.width} height={stageSizes.height + 42} style={{background :"white"}}>
            <Layer id="mycanvas" ref={stageRef}>
                <Image image={imageProps}/>
                <TextComponent imageDetails={stageSizes} textString={`Bom dia, Ricardo!`}/>
            </Layer>
        </Stage>


        <button onClick={e => donwloadImage()}>Download</button>
        </div>
    )
}

export default StateReact