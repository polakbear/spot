import gql from "graphql-tag";

export const GetGenresQuery = gql`
    query GetGenresQuery {
        genres {
            genres {
                name
            }
        }
`;
