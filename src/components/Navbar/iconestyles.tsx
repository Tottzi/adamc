type iconstyle = {
  width: string,
  height: string,
  fill?: string,
  stroke?: string,
  cursor: string,
  margin: string,
  transition: string,
}

export const iconStyleFa: iconstyle = {
  width: "2rem",
  height: "2rem",
  fill: "white",
  cursor: "pointer",
  margin: "0.75rem",
  transition: "500ms",
};
export const iconStyleFaHover: iconstyle = { ...iconStyleFa, fill: "blue" };
export const iconStyleFi: iconstyle = {
  width: "2rem",
  height: "2rem",
  stroke: "white",
  cursor: "pointer",
  margin: "0.75rem",
  transition: "500ms",
};
export const iconStyleFiHover: iconstyle = { ...iconStyleFi, stroke: "blue" };