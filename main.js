import './style.css'
import * as d3 from "d3";

const width = 640;
const height = 400;
const marginTop = 25;
const marginRight = 20;
const marginBottom = 35;
const marginLeft = 40;

// Think about #app as application's entrypoint
const app = d3.selectAll("#app")
  .data([0])
  .join("div")
  .attr("id", "app");

const svg = app.append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])
  .attr("style", "max-width: 100%; height: auto;");

d3.csv(
  "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/master/inst/extdata/penguins.csv",
  d3.autoType
).then(penguins => {

  const x = d3.scaleLinear()
    .domain(d3.extent(penguins, d => d.flipper_length_mm)).nice()
    .range([marginLeft, width - marginRight]);

  const y = d3.scaleLinear()
    .domain(d3.extent(penguins, d => d.body_mass_g)).nice()
    .range([height - marginBottom, marginTop]);

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  svg.append("g")
    .selectAll("circle")
    .data(penguins)
    .join("circle")
    .filter(d => d.body_mass_g)
    .attr("cx", d => x(d.flipper_length_mm))
    .attr("cy", d => y(d.body_mass_g))
    .attr("r", 3);
});
