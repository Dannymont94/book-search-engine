import gql from 'graphql-tag';

export const GET_ME = gql`
  query me($_id: ID!) {
    me(_id: $_id) {
      savedBooks {
        bookId
        image
        title
        authors
        description
      }
    }
  }
`;