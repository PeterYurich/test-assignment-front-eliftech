import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoaderBallTriangle, SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const CartPage = lazy(() => import('./pages/CartPage/CartPage'))
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<LoaderBallTriangle />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;