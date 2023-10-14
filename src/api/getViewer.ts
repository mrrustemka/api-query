import { gql } from "@apollo/client/core";

export const GET_VIEWER_QUERY = gql`
  query {
    viewer {
      name
      avatarUrl
    }
  }
  `;
