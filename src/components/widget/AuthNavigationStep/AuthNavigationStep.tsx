import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Route } from '~/constants'
import { Checkmark, Step, StepsContainer } from './styles'

const steps: string[][] = [
  [Route.SignUp],
  [Route.SignUpInterest],
  [Route.SignUpLevel],
  [Route.SignUpPlan, Route.SignUpBenefits],
  [Route.SignUpCard],
]

const getStep = (path: string): number => steps.flat().indexOf(path) + 1

const AuthNavigationStep: React.FC = () => {
  const { pathname } = useLocation()
  const [currentStep, setCurrentStep] = useState<number>(getStep(pathname))

  useEffect(() => {
    setCurrentStep(getStep(pathname))
  }, [pathname])

  return (
    <StepsContainer>
      {steps.map((_: string[], i: number) => (
        <Step key={i} isActive={currentStep === i + 1} isCompleted={i + 1 < currentStep}>
          {i + 1 < currentStep ? <Checkmark /> : i + 1}
        </Step>
      ))}
    </StepsContainer>
  )
}

export default React.memo(AuthNavigationStep)
