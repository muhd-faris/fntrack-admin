interface ITabItem {
  path: string;
  icon_default: string;
  icon_selected: string;
}

export const TabItems: ITabItem[] = [
  {
    path: 'tournaments',
    icon_default: 'assets/icons/outline/cup.svg',
    icon_selected: 'assets/icons/bold/cup.svg',
  },
  {
    path: 'users',
    icon_default: 'assets/icons/outline/profile-2user.svg',
    icon_selected: 'assets/icons/bold/profile-2user.svg',
  },
  {
    path: 'dashboard',
    icon_default: 'assets/icons/outline/grid-equal.svg',
    icon_selected: 'assets/icons/bold/grid-equal.svg',
  },
  {
    path: 'rewards',
    icon_default: 'assets/icons/outline/medal-star.svg',
    icon_selected: 'assets/icons/bold/medal-star.svg',
  },
  {
    path: 'more',
    icon_default: 'assets/icons/outline/ellipsis-horizontal-circle.svg',
    icon_selected: 'assets/icons/bold/ellipsis-horizontal-circle.svg',
  },
];
