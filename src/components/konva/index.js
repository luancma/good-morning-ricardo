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
            fontSize="42"
            drawBorder
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

        console.log(dataURL)
        downloadURI(dataURL, 'stage.jpg');
        // canvas.toDataURL({
        //     pixelRatio: 2 // or other value you need
        //   })
        // console.log(canvas.canvas.toDataURL())

        // console.log(canvas.toDataURL('local.png'))
        // var image = canvas
        // window.location.href=image; // it will save locally
        // console.log(image)
        // downloadURI(dataURL, 'stage.jpeg');
        // var dataURL = canvas.toDataURL();
        // console.log(dataURL);
        // console.log({img})
        // window.location.href=image; // it will save locally
    }



    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
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