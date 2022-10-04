import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts'
import { History } from '@pages/History'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
