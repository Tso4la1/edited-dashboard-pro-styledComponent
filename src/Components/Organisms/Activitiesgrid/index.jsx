import React from "react";
import Icons from "../../Atoms/Icons";
import UserTimerList from "../../Molecules/UserTimerList";
import Text from "../../Atoms/Text";
import Images from "../../Atoms/Images";

export default function Activitiesgrid() {
    const active =
        [
            {
                id: 1,
                duty: <Text word = "wor" />,
                icon: "moreOption",
                time: <Text word = "t32" />,
                text: <Text word = "lw36" />,
                backgroundImg: <Images imageName = "backWork" />,
            },
            {
                id: 2,
                duty: <Text word = "pla" />,
                icon: "moreOption",
                time: <Text word = "t10" />,
                text: <Text word = "lw8" />,
                backgroundImg: <Images imageName = "backPlay" />,
            },
            {
                id: 3,
                duty: <Text word = "stud" />,
                icon: "moreOption",
                time: <Text word = "t4" />,
                text: <Text word = "lw7" />,
                backgroundImg: <Images imageName = "backStudy" />,
            },
            {
                id: 4,
                duty: <Text word = "exer" />,
                icon: "moreOption",
                time: <Text word = "t4" />,
                text: <Text word = "lw5" />,
                backgroundImg: <Images imageName = "backEx" />,
            },
            {
                id: 5,
                duty: <Text word = "soc" />,
                icon: "moreOption",
                time: <Text word = "t5" />,
                text: <Text word = "lw10" />,
                backgroundImg: <Images imageName = "backSocial" />,
            },
            {
                id: 6,
                duty: <Text word = "selca" />,
                icon: "moreOption",
                time: <Text word = "t2" />,
                text: <Text word = "lw2"/>,
                backgroundImg: <Images imageName = "backselca"/>,
            }
  ];
    return (
         <div className="activitiesGrid">
            <UserTimerList active= { active} />
        </div>)
  ;
}
