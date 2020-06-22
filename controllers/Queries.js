import gql from "graphql-tag";

export const World = gql`
  query {
    globalTotal {
      affectedCountries
      tests
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      casesPerOneMillion
      deathsPerOneMillion
      testsPerOneMillion
      updated
    }
  }
`;

export const Covid = gql``;
