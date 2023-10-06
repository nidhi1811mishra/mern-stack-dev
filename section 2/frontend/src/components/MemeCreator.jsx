import React from 'react'
import { Circle, Layer, Line, Rect, Stage , Text, Image } from 'react-konva';
import useImage from 'use-image';

const MemeImage =()=>{
    const [image]= useImage('/meme.jpg');
    return<Image image={image}/>
}

const MemeCreator = () => {
  return (
    <div>
        <div className='container py-5'>
            <h1 className='text-center'>Meme Creator</h1>
            <hr />
            <Stage width={600} height={800}>
                <Layer>
                    <Rect
                      x={0}
                      y={0}
                      width={100}
                      height={50}
                      fill={'red'}
                    />

                     <Rect
                      x={50}
                      y={20}
                      width={100}
                      height={50}
                      fill={'blue'}
                      stroke={'yellow'}
                      strokeWidth={4}
                      draggable   // use to drag by mouse  
                    />

                    <Circle
                      x={200}
                      y={200}
                      radius={100}
                      fill={'purple'}
                      draggable
                    />
                    
                    <Line
                       x={300} y={300} stroke={'black'} points={[0,0,100,0, 100,100,200,100]}    //points{[starting-point(x),endind-points(y),X,Y]}
                        tension={0.7}
                        fill='yellow'
                        draggable
                        closed
                   />


                </Layer>
            </Stage>

            <Stage width={600} height={800}>
                <Layer>
                    <MemeImage/>
                    
                    <Text 
                      text={"Kuch bhi"}
                      fontSize={30}
                      x={50}
                      y={100}
                      width={200}
                    />
                </Layer>
            </Stage>
        </div>

    </div>
  )
}

export default MemeCreator;