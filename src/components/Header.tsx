import { useLocation } from 'wouter';
import ArrowIcon from '@assets/icons/arrow.svg?react';
import DotsIcon from '@assets/icons/dots.svg?react';
import type { HeaderProps } from '@customTypes/components/header';

const Header: React.FC<HeaderProps> = ({ showBackButton, title }) => {
  const [, navigate] = useLocation();

  return (
    <header className="header">
      <div className="header__title">
        {showBackButton && (
          <button type="button" className="header__back-button" onClick={() => navigate('/')} data-testid="back-button">
            <ArrowIcon className="header__arrow" />
          </button>
        )}
        <p>{title}</p>
      </div>
      <button type="button">
        <DotsIcon className="header__dots" />
      </button>
    </header>
  );
};

export default Header;
