import React, { useCallback, useContext } from 'react'
import { TabBarButton } from './styles'
import { type ITabBarContext, TabBarContext } from './TabBar'

interface IProps {
  id: string
  label: string
}

const TabBarItem: React.FC<IProps> = ({ id, label }) => {
  const { activeTab, onChange } = useContext<ITabBarContext>(TabBarContext)

  const handleClick = useCallback(() => {
    onChange(id)
  }, [id, onChange])

  return (
    <TabBarButton onClick={handleClick} isActive={activeTab === id}>
      {label}
    </TabBarButton>
  )
}

export default React.memo(TabBarItem)
