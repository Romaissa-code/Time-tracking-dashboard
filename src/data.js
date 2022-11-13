import workImg from "./images/icon-work.svg";
import selfCareImg from "./images/icon-self-care.svg";
import studyImg from "./images/icon-study.svg";
import socialImg from "./images/icon-social.svg";
import playImg from "./images/icon-play.svg";
import exerciseImg from "./images/icon-exercise.svg";

const data = [
  {
    title: "Work",
    img: workImg,
    clr: "hsl(15, 100%, 70%)",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
        period: "day",
      },
      weekly: {
        current: 32,
        previous: 36,
        period: "week",
      },
      monthly: {
        current: 103,
        previous: 128,
        period: "month",
      },
    },
  },
  {
    title: "Play",
    img: playImg,
    clr: "hsl(195, 74%, 62%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
        period: "day",
      },
      weekly: {
        current: 10,
        previous: 8,
        period: "week",
      },
      monthly: {
        current: 23,
        previous: 29,
        period: "month",
      },
    },
  },
  {
    title: "Study",
    img: studyImg,
    clr: "hsl(348, 100%, 68%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
        period: "day",
      },
      weekly: {
        current: 4,
        previous: 7,
        period: "week",
      },
      monthly: {
        current: 13,
        previous: 19,
        period: "month",
      },
    },
  },
  {
    title: "Exercise",
    img: exerciseImg,
    clr: "hsl(145, 58%, 55%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
        period: "day",
      },
      weekly: {
        current: 4,
        previous: 5,
        period: "week",
      },
      monthly: {
        current: 11,
        previous: 18,
        period: "month",
      },
    },
  },
  {
    title: "Social",
    img: socialImg,
    clr: "hsl(264, 64%, 52%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
        period: "day",
      },
      weekly: {
        current: 5,
        previous: 10,
        period: "week",
      },
      monthly: {
        current: 21,
        previous: 23,
        period: "month",
      },
    },
  },
  {
    title: "Self Care",
    img: selfCareImg,
    clr: "hsl(43, 84%, 65%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
        period: "day",
      },
      weekly: {
        current: 2,
        previous: 2,
        period: "week",
      },
      monthly: {
        current: 7,
        previous: 11,
        period: "month",
      },
    },
  },
];
export default data;
