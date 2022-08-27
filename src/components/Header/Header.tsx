import React from 'react'
import * as Styles from './Header.styles'
import { ReactComponent as HistoryLogo } from '../../assets/icons/historyIcon.svg'
import { ReactComponent as TimerLogo } from '../../assets/icons/timerIcon.svg'
import { CalendarCheck } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <CalendarCheck size={52} color="#ffd60a" />
      <nav>
        <NavLink to="/" title="Timer">
          <TimerLogo />
        </NavLink>
        <NavLink to="/history" title="History">
          <HistoryLogo />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  )
}
