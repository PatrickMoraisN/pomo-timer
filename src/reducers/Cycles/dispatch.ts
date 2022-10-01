import { Cycle } from '../../contexts/CyclesContext'
import { ActionTypes } from './actions'

export function addNewCycleAction(newCycle: Cycle) {
  return { type: ActionTypes.ADD_NEW_CYCLE, payload: { newCycle } }
}

export function interruptCurrentCycleAction() {
  return { type: ActionTypes.INTERRUPT_CURRENT_CYCLE }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
