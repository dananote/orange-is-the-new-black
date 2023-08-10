export interface LayoutProps {
  isMobile?: boolean;
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu?: () => void;
  showNav?: boolean;
  location?: string;
}
