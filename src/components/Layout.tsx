import Header from '@components/Header';
import type { LayoutProps } from '@customTypes/components/layout';

const Layout: React.FC<LayoutProps> = ({ children, showBackButton = false, title }) => {
  return (
    <div className="layout">
      <Header title={title} showBackButton={showBackButton} />
      {children}
    </div>
  );
};

export default Layout;
