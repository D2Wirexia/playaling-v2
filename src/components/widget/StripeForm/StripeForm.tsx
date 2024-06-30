import React, { useCallback, useMemo } from 'react'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
} from '@stripe/react-stripe-js'
import { loadStripe /*type StripeElement*/ } from '@stripe/stripe-js'
import { EnvService } from '~/services'
import { Color } from '~/constants'

const CARD_OPTIONS = {
  style: {
    base: {
      fontFamily: 'Hind Madurai',
      fontSize: '16px',
      ':-webkit-autofill': {
        color: 'yellow',
      },
      '::placeholder': {
        fontFamily: 'Hind Madurai',
        color: Color.CoolGray,
      },
    },
    invalid: {
      fontFamily: 'Hind Madurai',
      iconColor: 'transparent',
      color: Color.FireOpal,
    },
  },
}

const StripeForm: React.FC = () => {
  const stripePromise = useMemo(() => {
    if (loadStripe) {
      return loadStripe(EnvService.stripeApiKey())
    }
    return null
  }, [loadStripe])

  const handleReadyField = useCallback((/*element: StripeElement*/) => {}, [])

  return (
    <Elements stripe={stripePromise} options={{ locale: 'en' }}>
      <CardNumberElement onReady={handleReadyField} options={CARD_OPTIONS} />
      <CardExpiryElement onReady={handleReadyField} options={CARD_OPTIONS} />
      <CardCvcElement onReady={handleReadyField} options={CARD_OPTIONS} />
    </Elements>
  )
}

export default React.memo(StripeForm)
