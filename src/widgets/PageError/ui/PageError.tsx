interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <p>Error has happened</p>
      <button type='button' onClick={reloadPage}>
        Reload page
      </button>
    </div>
  );
};
