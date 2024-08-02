import {render} from "preact";
import "./reset.css";
import "./main.css";
import {type Continent, continents} from "./data.ts";

function Graph() {
    return <div className="continents">
        {continents.map((continent, k) => (<Ring {...continent} key={continent.code} index={k}/>))}
    </div>;
}

function Ring({name, gold, silver, bronze, index}: Continent & {index: number}) {
    const total = gold + silver + bronze
    return <article className="continent" style={{gridColumnStart: Math.floor(index / 2) + 1 }}>
        <header>
            <h2>{name}: <strong>{total}</strong></h2>
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

        </div>
    </article>
}

render(<Graph/>, document.getElementById("graph"));
