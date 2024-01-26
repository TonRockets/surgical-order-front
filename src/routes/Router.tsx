import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from '@components/PageLoading';
import Layout from '@components/Layout';

import paths from '@routes/paths';

const Home = lazy(() => import('@pages/Home'));
const List = lazy(() => import('@pages/List'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));

interface Routes {
   path: string;
   element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Layout>
         <Component />
      </Layout>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
   { path: paths.LIST, element: getRouteElement(List) }
];

export default createBrowserRouter(routes);
