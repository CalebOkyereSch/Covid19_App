import gql from "graphql-tag";

const getTestingCenters = gql`
  query {
    testingSites {
      _id
      name
      placesName
      location {
        coordinates
      }
      createdAt
    }
  }
`;

const vitalsData = gql`
  {
    vitals(filter: { user: "5e92383292b9310017c84789" }) {
      _id
      vitals {
        dryCough
        fever
        soreThroat
        aches
        shortnessOfBreath
        tiredness
      }
      createdAt
    }
  }
`;

const countryData = gql`
  {
    country(name: "Ghana") {
      name
      mostRecent {
        date(format: "yyyy-MM-dd")
        confirmed
        recovered
        deaths
      }
    }
  }
`;

export { vitalsData, getTestingCenters, countryData };
