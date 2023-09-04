import React from "react";
import Icons from "../../Atoms/Icons";
import Text from "../../Atoms/Text";
import UserTimerList from "../../Molecules/UserTimerList";



export default function Activitiesgrid() {
    const active =
        [
            {
                id: 1,
                duty: <Text type="p" text="Work" />,
                icon: "ellipsis",
                time: <Text type="p" text="32hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 36hrs" className="smallLetter" />,
                backgroundImg: <Icons type="work" className="backgroundIcon" />,
            },
            {
                id: 2,
                duty: <Text type="p" text="Play" />,
                icon: "ellipsis",
                time: <Text type="p" text="10hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 8hrs" className="smallLetter" />,
                backgroundImg: <Icons type="play" className="backgroundIcon" />,
            },
            {
                id: 3,
                duty: <Text type="p" text="Study" />,
                icon: "ellipsis",
                time: <Text type="p" text="4hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 7hrs" className="smallLetter" />,
                backgroundImg: <Icons type="study" className="backgroundIcon" />,
            },
            {
                id: 4,
                duty: <Text type="p" text="Exercise" />,
                icon: "ellipsis",
                time: <Text type="p" text="4hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 5hrs" className="smallLetter" />,
                backgroundImg: <Icons type="exercise" className="backgroundIcon" />,
            },
            {
                id: 5,
                duty: <Text type="p" text="Social" />,
                icon: "ellipsis",
                time: <Text type="p" text="5hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 10hrs" className="smallLetter" />,
                backgroundImg: <Icons type="social" className="backgroundIcon" />,
            },
            {
                id: 6,
                duty: <Text type="p" text="Self Care" />,
                icon: "ellipsis",
                time: <Text type="p" text="2hrs" className="bigLetter" />,
                text: <Text type="p" text="Last Week - 2hrs" className="smallLetter" />,
                backgroundImg: <Icons type="self-care" className="backgroundIcon" />,
            }
        ];
    return (
        <div className="activitiesGrid">
            <UserTimerList active={active} />
        </div>)
        ;
}
