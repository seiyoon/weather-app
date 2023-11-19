import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    weatherData: [Weather]
  }

  type Weather {
    dt: Int
    main: Main
    weather: [WeatherInfo]
    wind: Wind
    dt_txt: String
  }

  type Main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    humidity: Int
  }

  type WeatherInfo {
    description: String
    icon: String
  }

  type Wind {
    speed: Float
  }
`;
export default typeDefs;
