import 'commonStyles.css'
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoaderBallTriangle, SharedLayout } from 'components';
import { Container } from '@mui/material';
import { palette } from 'uiSettings/muiSettings';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const CartPage = lazy(() => import('./pages/CartPage/CartPage'))
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<LoaderBallTriangle />}>
        <Container sx={{backgroundColor: palette.background.default, height: "100vh"}}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Container>
      </Suspense>
    </div>
  );
}

export default App;