import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../src/routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout =
              route.layout !== undefined ? route.layout : DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  Layout ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
