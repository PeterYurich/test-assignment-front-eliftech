import 'commonStyles.css'
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoaderBallTriangle, SharedLayout } from 'components';
import { Container } from '@mui/material';
import { palette } from 'uiSettings/muiSettings';

const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const CartPage = lazy(() => import('./pages/CartPage/CartPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<LoaderBallTriangle />}>
        <Container sx={{backgroundColor: palette.background.default, height: "100vh"}}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="shop" element={<ShopPage />} />
              <Route path="cart" element={<CartPage />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
          </Routes>
        </Container>
      </Suspense>
    </div>
  );
}

export default App;