/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { infoContent, infoContentTitle } from './PieChartInfo'
import './piechart.scss'

const PieChart = ({
  data,
  width,
  height,
  innerRadius,
  outerRadius,
  translateX,
  translateY,
}) => {
  const windowWidth = window.innerWidth
  const pieChartRef = useRef()
  const tooltipRef = useRef()

  const colors = [
    '#ffd166',
    '#ef476f',
    '#118ab2',
    '#06d6a0',
    '#c4742e',
    '#0DB0FC',
  ]

  useEffect(() => {
    const svg = d3.select(pieChartRef.current)
    const values = data.map((val) => val.value)

    const radius = Math.min(width, height) / 2

    const pieGenerator = d3.pie().sort(null)

    const instructions = pieGenerator(values)

    const arcGenerator = d3.arc().innerRadius(innerRadius)

    const lineForLabels = d3
      .arc()
      .innerRadius(radius * 1)
      .outerRadius(radius * 0.8)

    svg
      .selectAll('.slice')
      .data(instructions)
      .join('path')
      .attr('class', 'slice')
      .attr('fill', (d) => colors[d.index])
      .style('scale', windowWidth > 768 ? '.85' : '1')
      .style('stroke', 'white')
      .style('stroke-width', '.5px')
      .style('cursor', 'pointer')
      .attr('d', (d) => {
        const adjustedOuterRadius = outerRadius * d.data - 20 * d.data
        return arcGenerator.outerRadius(adjustedOuterRadius)(d)
      })
      .on('mouseenter', (event, d) => {
        const [x, y] = arcGenerator.innerRadius(radius * 0.95).centroid(d)
        d3.select(tooltipRef.current)
          .style('left', `${x - 500}px`)
          .style('top', `${y + 100}px`)
          .style('opacity', '1')
          .style('width', '40rem')
          .text(infoContent[d.index])
      })
      .on('mouseleave', (d) => {
        d3.select(tooltipRef.current).style('opacity', '0')
      })

    svg
      .selectAll('.polyLines')
      .data(instructions)
      .enter()
      .append('polyline')
      .attr('class', 'polyLines')
      .attr('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .attr('points', (d) => {
        const posA = arcGenerator.innerRadius(radius * 0.5).centroid(d)
        const posB = lineForLabels.centroid(d)
        const posC = lineForLabels.centroid(d)
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        posC[0] = radius * 0.9 * (midangle < Math.PI ? 1 : -1)

        return [posA, posB, posC]
      })

    svg
      .selectAll('.labels')
      .data(instructions)
      .enter()
      .append('text')
      .text((d) => infoContentTitle[d.index])
      .attr('transform', (d) => {
        const pos = lineForLabels.centroid(d)
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1)

        return `translate(${pos})`
      })
      .style('text-anchor', (d) => {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return midangle < Math.PI ? 'start' : 'end'
      })
      .style('font-size', '12px')
      .style('cursor', 'pointer')
      .on('mouseenter', (event, d) => {
        const [x, y] = arcGenerator.innerRadius(radius * 0.95).centroid(d)
        d3.select(tooltipRef.current)
          .style('left', `${x - 500}px`)
          .style('top', `${y + 100}px`)
          .style('opacity', '1')
          .style('width', '40rem')
          .text(infoContent[d.index])
      })
      .on('mouseleave', (d) => {
        d3.select(tooltipRef.current).style('opacity', '0')
      })
  }, [])

  return (
    <div>
      <svg
        id="pie-chart"
        height={height}
        width={width}
        overflow="visible"
        ref={pieChartRef}
      />
      {windowWidth > 768 && (
        <div
          ref={tooltipRef}
          className="tooltip"
          style={{ position: 'absolute', opacity: 0, width: '0' }}
        />
      )}
    </div>
  )
}

export default PieChart
