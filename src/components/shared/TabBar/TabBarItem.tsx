import React, { useCallback, useContext } from 'react'
import { TabBarButton } from './styles'
import { type ITabBarContext, TabBarContext } from './TabBar'

interface IProps {
  value: string
  label: string
}

const TabBarItem: React.FC<IProps> = ({ value, label }) => {
  const { activeTab, onChange } = useContext<ITabBarContext>(TabBarContext)

  const handleClick = useCallback(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <TabBarButton onClick={handleClick} isActive={activeTab === value}>
      {label}
    </TabBarButton>
  )
}

export default React.memo(TabBarItem)
