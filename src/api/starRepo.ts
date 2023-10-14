import { gql } from "@apollo/client/core";

export const STAR_REPO = gql`
  mutation ($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        stargazers {
          totalCount
        }
      }
    }
  }
`;
