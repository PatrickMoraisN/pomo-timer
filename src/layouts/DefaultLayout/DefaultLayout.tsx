import { Outlet } from 'react-router-dom'
import { Header } from '../../components'
import * as Styles from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <Styles.LayoutContainer>
      <Header />
      <Outlet />
    </Styles.LayoutContainer>
  )
}
