import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

// initialize a GraphQL client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

//Query GrapQl
export const QueryCountryList = gql`{
  countries {
    name
    code
    emoji
    native
    capital
    currency
    continent{
      name
    }
    languages{
      name
    }
  }
  }`;

export const sortByParameters = (array, parameter) => array.sort((a, b) => a?.[parameter] > b?.[parameter] ? 1 : -1)
export const filterArrayByQuery = (array, parameter, query) => array?.filter((item) => item?.[parameter]?.toLowerCase().includes(query.toLocaleLowerCase()))
