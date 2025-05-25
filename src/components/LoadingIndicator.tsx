const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-indicator" data-testid="loading-indicator">
      <div className="loading-indicator__dots" aria-label="Loading" role="status">
        <span className="loading-indicator__dot" />
        <span className="loading-indicator__dot" />
        <span className="loading-indicator__dot" />
      </div>
    </div>
  );
};

export default LoadingIndicator;
