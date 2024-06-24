import { NextPage } from 'next';
import Catalog from '../components/Catalog/Catalog';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackError from '../components/FallbackError/FallbackError';
import { House } from '@homevision/interfaces';

const Index: NextPage<{houses: House[]}> = ({houses}) => {

  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Catalog ssHouses={houses}/>
    </ErrorBoundary>
  )
};

export default Index;


export const getStaticProps = async () => {

  const res = await fetch('https://staging.homevision.co/api_project/houses?per_page=12&page=1')

  console.log(res.ok)

  if (!res.ok) {
    return {
      props: {
        houses: []
      }
    }
  }

  const houses = await res.json()

  return {
    props: {
      houses: houses.houses
    }
  }

}
