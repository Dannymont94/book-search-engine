import gql from 'graphql-tag';

export const GET_ME = gql`
  query me {
    me {
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