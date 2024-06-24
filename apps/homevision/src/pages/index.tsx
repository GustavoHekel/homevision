import { NextPage } from 'next';
import Catalog from '../components/Catalog/Catalog';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackError from '../components/FallbackError/FallbackError';

const Index: NextPage = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Catalog/>
    </ErrorBoundary>
  )
};

export default Index;
