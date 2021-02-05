import React from 'react'
import { Stage, Layer, Text , Image, Rect} from 'react-konva';

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
        <div>
        <Stage width={stageSizes.width} height={stageSizes.height + 42} style={{background :"white"}} ref={stageRef}>
            <Layer id="mycanvas"  >
                <Image image={imageProps}/>
                <TextComponent imageDetails={stageSizes} textString={`Bom dia, Ricardo!`}/>
            </Layer>
        </Stage>
        <button onClick={e => donwloadImage()}>Download</button>
        <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">Share via Whatsapp</a>

        </div>
    )
}

export default StateReact