import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading....</p>}>
      <Home />
    </Suspense>
  );
}
export default App;
