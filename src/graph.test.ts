import { SimpleStringGraph } from "comp-sci-maths-lib/dist";

test("Graph", () => {
  const myGraph = new SimpleStringGraph();
  myGraph
    .addLink("A", "B")
    .addLink("B", "C")
    .addLink("C", "D")
    .addLink("C", "A")
    .addLink("D", "E");

  const fromA = myGraph.getConnectedVertices("A");
  ["B", "C"].forEach((x) => expect(fromA.includes(x)).toBeTruthy());
  ["D", "E"].forEach((x) => expect(fromA.includes(x)).toBeFalsy());
});
