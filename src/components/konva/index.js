import React from 'react'
import { isMobile } from 'react-device-detect';
import { Stage, Layer, Text , Image} from 'react-konva';

const TextComponent = ({ textString, imageDetails }) => {
    return (
       <Text 
            width={imageDetails.width}
            y={imageDetails.height}
            align="center"
            text={textString}
            fontSize={42}
            fill="purple"
            padding="16"
            draggable
        />
    )
} 

const StateReact = ({ imageProps, stageSizes, img }) => {

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
        var canvas = stageRef.current
        var dataURL = canvas.toDataURL({ pixelRatio: 2 });
        downloadURI(dataURL, 'stage.jpg');
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            background: "#fff"
        }}>
        <Stage width={stageSizes.width * 0.45} height={(stageSizes.height * 0.45) + 42} ref={stageRef} scaleX={0.45} scaleY={0.45} >
            <Layer id="mycanvas">
                <Image image={imageProps} style />
                <TextComponent imageDetails={stageSizes} textString={`Bom dia, Ricardo!`}/>
            </Layer>
        </Stage>
      
        <button style={{
            padding: 16,
            fontSize: '1.5rem'
        }} onClick={e => donwloadImage()}>Download</button>
        </div>
    )
}

export default StateReact
