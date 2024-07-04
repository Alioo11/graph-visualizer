import { Suspense, lazy, type FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loader from "src/components/Kit/Loader";
import Layout from "src/components/Layout";
import { ROUTES } from "src/constants/routes";

const DijkstraPathFinding = lazy(() => import("src/components/Pages/PathFinding/Dijkstra"));
const AStartPathFinding = lazy(() => import("src/components/Pages/PathFinding/AStar"));
const KruskalGraphConnectivity = lazy(() => import("src/components/Pages/GraphConnectivity/Kruskal"));

const _404 = lazy(() => import("src/components/Pages/404"));
const Dashboard = lazy(() => import("src/components/Pages/Dashboard"));

const Router: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.DIJKSTRA} element={<DijkstraPathFinding />} />
            <Route path={ROUTES.A_STAR} element={<AStartPathFinding />} />
            <Route path={ROUTES.KRUSKAL} element={<KruskalGraphConnectivity />} />
            <Route path="*" element={<_404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
