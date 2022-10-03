import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'
import * as Styles from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <Styles.LayoutContainer>
      <Header />
      <Outlet />
    </Styles.LayoutContainer>
  )
}
