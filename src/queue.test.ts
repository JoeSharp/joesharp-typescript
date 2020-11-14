import { Queue } from "comp-sci-maths-lib/dist";

test("Queue", () => {
  const myQueue = new Queue<number>();

  myQueue.enqueue(6);
  myQueue.enqueue(7);
  myQueue.enqueue(10);

  const a = myQueue.dequeue();
  expect(a).toBe(6);

  myQueue.enqueue(45);
  const b = myQueue.dequeue();
  expect(b).toBe(7);
});
