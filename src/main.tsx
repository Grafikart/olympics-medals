import {render} from "preact";
import "./reset.css";
import "./main.css";
import {type Continent, continents} from "./data.ts";
import {useEffect, useState} from "preact/hooks";
import {useIncrementalNumber} from "./hooks/useIncrementalNumber.ts";

/**
 * Rings representing the number of medals of continents
 */
function Graph() {
    const totals = continents.map(c => c.total)
    return <div className="continents">
        {continents.map((continent, k) => (<Ring {...continent} key={continent.code} index={k} min={Math.min(...totals)} max={Math.max(...totals)}/>))}
    </div>;
}

/**
 * Ring for a continent
 */
function Ring({name, gold, silver, bronze, total, index, min, max}: Continent & {index: number, min: number, max: number}) {
    const [ratio, setRatio] = useState(0)
    const style = {
        gridColumnStart: Math.floor(index / 2) + 1,
        '--index': index,
        '--ratio': ratio
    }
    useEffect(() => {
            setRatio((total - min) / (max - min))
    }, [])
    const count = useIncrementalNumber(total)
    return <article className="continent" style={style}>
        <header>
            <h2>{name}: <strong>{count}</strong></h2>
            <ul className="continent__count">
                <li className="gold" aria-label="Gold medals">
                    {gold}
                </li>
                <li className="silver" aria-label="Silver medals">
                    {silver}
                </li>
                <li className="bronze" aria-label="Bronze medals">
                    {bronze}
                </li>
            </ul>
        </header>
        <div className="ring">
            <div className="ring__l"></div>
            <div className="ring__r"></div>
            <div className="ring__b"></div>
            <div className="ring__t"></div>
        </div>
    </article>
}

render(<Graph/>, document.getElementById("graph"));
