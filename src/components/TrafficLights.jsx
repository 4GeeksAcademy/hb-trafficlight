import clsx from "clsx";
import {useState} from "react"

export function TrafficLight() {
    const {light, setLight} = useState("green");

    const handleClickRed = () => {
        setLight("red")
    };

    const handleCLickYellow = () => {
        setLight("yellow")
    };

    const handleClickGreen = () => {
        setLight("green")};

    return (
        <div className="traffic">
            <div className={clsx("red", light ==="red" && "glow")}
            onClick={handleClickRed}/>

            <div className={clsx("yellow", light ==="yellow" && "glow")}
            onClick={handleCLickYellow}/>

            <div className={clsx("green", light ==="green" && "glow")}
            onClick={handleCLickGreen}/>
        </div>
    );
}

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));