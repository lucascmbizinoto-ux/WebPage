import { createContext, useContext, useMemo, type ReactNode } from 'react';

export type MenuItem = {
  href: string
  id: string
  label: string
}

type MenuContextValue = {
  loading: boolean
  menuItems: MenuItem[]
}

type MenuProviderProps = {
  children: ReactNode
  menu_id: string
}

const mainMenuItems: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'capabilities', label: 'Capabilities', href: '/#capabilitiesgrid' },
  { id: 'services', label: 'Services', href: '/#operational-services' },
  { id: 'contact', label: 'Contact', href: '/#contactinquiry' },
];

const footerMenuItems: MenuItem[] = [
  { id: 'footer-home', label: 'Home', href: '/' },
  { id: 'footer-capabilities', label: 'Capabilities', href: '/#capabilitiesgrid' },
  { id: 'footer-contact', label: 'Contact', href: '/#contactinquiry' },
];

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children, menu_id }: MenuProviderProps) {
  const menuItems = useMemo(() => (
    menu_id === 'footer_menu' ? footerMenuItems : mainMenuItems
  ), [menu_id]);

  return <MenuContext.Provider value={{ menuItems, loading: false }}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used inside MenuProvider');
  }
  return context;
}
