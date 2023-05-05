import { useState } from "react";
import { TempFront, TempBack } from '../Components';
import ReactCardFlip from 'react-card-flip';

export default function FlipCardApp(props){

    const {frontLabel, backLabel} = props;

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        // console.log(isFlipped)
        setIsFlipped(!isFlipped);
    };
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>
                <TempFront label = {frontLabel}/>
            </div>

            <div onClick={handleClick}>
                <TempBack label = {backLabel}/>
        </div>
      </ReactCardFlip>
    );
}