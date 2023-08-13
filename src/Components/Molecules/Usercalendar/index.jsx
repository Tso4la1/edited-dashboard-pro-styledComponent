import React from 'react'
import Text from '../../Atoms/Text'

export default function UserCalendar() {
  return (
    <div className='userCalendar'>
      <Text type="p" text="Daily" />
      <Text type="p" text="Weekly" />
      <Text type="p" text="Monthly" />
    </div>
  )
}
