import Header from "./components/Header";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
    </>
  );
}

root.render(
  <>
    <Page />
    <h1>its jsx</h1>
  </>
);
