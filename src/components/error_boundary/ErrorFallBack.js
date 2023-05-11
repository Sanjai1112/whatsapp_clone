import React from 'react';
function ErrorFallBack({error, resetErrorBoundary}) {

  return (
    <div className='error-boundary-root'>
        <p>Something went wrong</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

export default ErrorFallBack;
