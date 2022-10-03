const cyclesCompletedOnlyMinutesMock = [
  {
    id: 1,
    task: 'task1',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 2,
    task: 'task2',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 3,
    task: 'task3',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
]

const cyclesCompletedOnlyHoursMock = [
  {
    id: 1,
    task: 'task1',
    minutesAmount: 50,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 2,
    task: 'task2',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 3,
    task: 'task3',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
]

const cyclesCompletedHoursAndMinutesMock = [
  {
    id: 1,
    task: 'task1',
    minutesAmount: 50,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 2,
    task: 'task2',
    minutesAmount: 10,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 3,
    task: 'task3',
    minutesAmount: 20,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
]

const cyclesUncompletedMock = [
  {
    id: 1,
    task: 'task1',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 2,
    task: 'task2',
    minutesAmount: 10,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    interruptedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
  {
    id: 3,
    task: 'task3',
    minutesAmount: 5,
    startDate: new Date('2022-10-03T20:21:36.186Z'),
    finishedDate: new Date('2022-10-03T20:26:36.571Z'),
  },
]

export {
  cyclesCompletedOnlyMinutesMock,
  cyclesCompletedOnlyHoursMock,
  cyclesCompletedHoursAndMinutesMock,
  cyclesUncompletedMock,
}
