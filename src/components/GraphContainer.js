import React from 'react'
import LineGraph from './LineGraph'
import './css/GraphContainer.css'
import './css/GraphCard.css'

import { FormControl, Select, MenuItem, CardContent , Card } from "@material-ui/core";

function GraphContainer({casesType}) {
    return (
        <div  className="graph_container">
            <Card className="graph_card">
                <CardContent>
                    <h3>World wide new {casesType}</h3>
                    <LineGraph casesType={casesType} />
                </CardContent>
            </Card>
            {/* probably add some other graphs here */}
{/* 
            <Card className="graph_card">
                <CardContent>
                    <h3>World wide new {casesType}</h3>
                    <LineGraph casesType={casesType} />
                </CardContent>
            </Card>

            <Card className="graph_card">
                <CardContent>
                    <h3>World wide new {casesType}</h3>
                    <LineGraph casesType={casesType} />
                </CardContent>
            </Card> */}
            
        </div>
    )
}

export default GraphContainer
