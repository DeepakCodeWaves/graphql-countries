import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
query Countries {
    countries {
        awsRegion
        capital
        code
        currencies
        currency
        emoji
        emojiU
        name
        native
        phone
        phones
        languages {
            code
            name
            native
            rtl
        }
        subdivisions {
            code
            emoji
            name
        }
        states {
            code
            name
        }
    }
}

`;