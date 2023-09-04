import React from 'react';
import Text from '../../Atoms/Text';
import { UserCalenderWrapper } from "../../Atoms";


export default function UserCalendar() {
  return (
    <UserCalenderWrapper >
      <Text type="p" text="Daily" />
      <Text type="p" text="Weekly" />
      <Text type="p" text="Monthly" />
    </UserCalenderWrapper>
  )
}
