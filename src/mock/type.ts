export interface LayoutProps {
  isMobile?: boolean;
  isDesktop?: boolean;
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu?: () => void;
  showNav?: boolean;
  location?: string;
  bgImage?: string;
}

export interface SubTextProps {
  subText?: string;
  color?: string;
}
