import { gql } from "@apollo/client";

export const signin = gql`
  query Signin($input: AccountInfo!) {
    signin: login(body: $input)
      @rest(type: "Login", path: "iam/api/sso/authentication/login", method: "POST", bodyKey: "body") {
      access_token
    }
  }
`;
