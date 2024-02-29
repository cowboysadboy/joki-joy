export interface MenuItem {
  name: string;
  url: string;
  arrow: boolean;
}
export const MENU_DATA: MenuItem[] = [
  {
    name: "Парки",
    url: "#",
    arrow: true,
  },
  {
    name: "Праздники",
    url: "#",
    arrow: false,
  },
  {
    name: "Рестораны",
    url: "#",
    arrow: true,
  },
  {
    name: "Афиши",
    url: "#",
    arrow: false,
  },
];
