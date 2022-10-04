import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewCycleForm } from '../NewCycleForm'
import { RenderWithContext } from '@test/utils/RenderWithContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Write a task!'),
  minutesAmount: zod.number().min(5).max(60, "Cycle can't be 60+ min!"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const NewCycleComponent = () => {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormProvider {...newCycleForm}>
      <NewCycleForm />
    </FormProvider>
  )
}

const RenderNewCycleForm = () => {
  render(
    <RenderWithContext>
      <NewCycleComponent />
    </RenderWithContext>,
  )
}

describe('NewCycleForm', () => {
  it('should render correctly', async () => {
    RenderNewCycleForm()
    const taskInput = screen.getByTestId('task-input')
    const minutesInput = screen.getByTestId('minutes-input')

    expect(taskInput).toBeInTheDocument()
    expect(minutesInput).toBeInTheDocument()

    await userEvent.type(taskInput, 'This is my first task')
    await userEvent.type(minutesInput, '5')

    expect(taskInput).toHaveValue('This is my first task')
    expect(minutesInput).toHaveValue(5)
  })
})
