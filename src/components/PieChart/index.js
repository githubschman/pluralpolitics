/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, {useState} from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, mobile }) => {

  // eslint-disable-next-line no-unused-vars
  const [scaleAmount, setScaleAmount] = useState(1)
  // transform
  const transformArr = [
    "10, -10",
    "10, 0",
    "0, 0",
    "0, -10"
  ]

  // TODO: comment back in if we ever want to make the pie sections larger on hover
  const scaleUp = () => {
    // setScaleAmount(1.25)
  }

  const scaleDown = () => {
    // setScaleAmount(1)
  }

  const fontSize = mobile ? Math.floor(data.data.value * 100) / 5 : Math.floor(data.data.value * 100) / 2.5

  return (
    <g onMouseEnter={scaleUp} onMouseLeave={scaleDown} key={index} className="arc" transform={`scale(${scaleAmount}) translate(${transformArr[index]})`}>
      <path className="arc" d={createArc(data)} fill={colors(index)} />
    </g>
  )
}

const PieChart = props => {
  const {innerRadius, outerRadius, width, height, data, translateX, translateY, mobile} = props;
  const createPie = d3
    .pie()
    .value(1)
    .sort(null);

  const createArc = (index) => {
    return (
        d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius((outerRadius * data[index].value) - (20 * data[index].value))
    )
  };

  // green 06d6a0
  // pink ef476f
  // blue 118ab2
  // yellow ffd166

  const colors = d3.scaleOrdinal(["#ffd166", "#ef476f", "#118ab2", "#06d6a0"]);
  const format = d3.format(".2f");
  const pieData = createPie(data);

  const getPercent = (val) => Math.floor(val * 100)

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${translateX} ${translateY})`}>
        {pieData.map((d, i) => (
          <Arc
            key={`${i}-arc`}
            index={i}
            data={d}
            createArc={createArc(i)}
            colors={colors}
            format={format}
            mobile={mobile}
          />
        ))}
      </g>
    </svg>
  );
};

export default PieChart;
