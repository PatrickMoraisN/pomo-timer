import React from 'react'
import * as Styles from './Header.styles'
import { CalendarCheck, Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <CalendarCheck data-testid="logo" size={52} color="#ffd60a" />
      <nav>
        <NavLink data-testid="timer-link" to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink data-testid="history-link" to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  )
}
