import React, { useCallback, useState } from 'react'
import Keyboard from 'react-simple-keyboard'
import './keyboard.css'

const layout = {
  default: [
    'ذ 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} ض ص ث ق ف غ ع ه خ ح ج د \\',
    '{lock} ش س ي ب ل ا ت ن م ك ط {enter}',
    '{shift} ئ ء ؤ ر لا ى ة و ز ظ {shift}',
    '{space}',
  ],
  shift: [
    'ّ ! @ # $ % ^ & * ) ( _ + {bksp}',
    '{tab} َ ً ُ ٌ لإ إ ‘ ÷ × ؛ < > |',
    '{lock} ِ ٍ ] [ لأ أ ـ ، / : " {enter}',
    '{shift} ~ ْ } { لآ آ ’ , . ؟ {shift}',
    `{space}`,
  ],
}

interface IProps {
  handleSubmit: () => void
  onChange: (value: string) => void
}

export const VirtualKeyboard: React.FC<IProps> = ({ handleSubmit, onChange }) => {
  const [layoutName, setLayoutName] = useState<'default' | 'shift'>('default')

  const onKeyPress = useCallback(
    (key: string) => {
      switch (key) {
        case '{shift}':
        case '{lock}':
          setLayoutName((prev) => (prev === 'default' ? 'shift' : 'default'))
          return
        case '{enter}':
          handleSubmit()
          return
        default:
          return
      }
    },
    [handleSubmit],
  )

  return (
    <Keyboard
      layout={layout}
      layoutName={layoutName}
      onKeyPress={onKeyPress}
      onChange={onChange}
      rtl
      theme="hg-theme-default"
    />
  )
}

export default VirtualKeyboard
