import { base } from './base';
import { GetHousesRequest, GetHousesResponse } from '@homevision/interfaces';

export const housesAPI = base.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query<GetHousesResponse, GetHousesRequest>({
      query: (request) => {
        return {
          url: 'houses',
          params: {
            ...request
          }
        };
      }
    })
  })
});


export const { useLazyGetHousesQuery } = housesAPI;
