import React from "react";

export const TAB_TYPES = {
  HOME: "home",
  ABOUT: "about",
  OTHERS: "others",
};

export const tabData = [
  {
    text: "Home",
    type: TAB_TYPES.HOME,
  },
  {
    text: "About",
    type: TAB_TYPES.ABOUT,
  },
  {
    text: "Others",
    type: TAB_TYPES.OTHERS,
  },
];

export const useMenu = (): {
  tabType: string;
  changeTab: (tabType: string) => void;
} => {
  const [tabType, setTabType] = React.useState<string>(TAB_TYPES.HOME);

  const changeTab = React.useCallback(
    (tabType: string) => {
      setTabType(tabType);
    },
    [tabType]
  );

  return { tabType, changeTab };
};
