import type { ErrorMessageProps } from '@customTypes/components/errorMessage';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message" data-testid="error-message">
      <p>Oops!</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
