import { Typography } from '@/shared/ui/Typography';

interface PageErrorProps {
  message?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { message } = props;

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Typography title={`${message || 'Error has happened'}`} />
      <button type='button' onClick={reloadPage}>
        Reload page
      </button>
    </div>
  );
};
