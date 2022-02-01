import './Chart.css'
import ChartBar from './ChartBar/ChartBar'

const Chart = (props) => {
    const dpValues = props.dataPoints.map(dp => dp.value)
    console.log("values:", dpValues)
    const totalMax = Math.max(...dpValues)
    console.log(totalMax)
    
    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint, i) => (
                <ChartBar 
                    key={i}
                    value={dataPoint.value} 
                    maxValue={totalMax} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    )

}

export default Chart;