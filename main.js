import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

import { fromEvent } from "rxjs";
import { throttleTime, scan } from "rxjs/operators";

fromEvent(document, "click")
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0),
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
