const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">
      <h4>An error has occurred</h4>
      <p>{error.message}</p>
    </div>
  );
};

export { ErrorMessage };
