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
    return (
        <Stage width={stageSizes.width} height={stageSizes.height + 42} style={{background :"white"}}>
            <Layer>
                <Image image={imageProps}/>
                <TextComponent imageDetails={stageSizes} textString={`Bom dia, Ricardo!`}/>
            </Layer>
        </Stage>
    )
}

export default StateReact