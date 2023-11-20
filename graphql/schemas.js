import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    weatherData(cityName: String!): WeatherData
  }

  type WeatherData {
    city: City
    list: [Weather]
  }

  type City {
    name: String
    country: String
    population: Int
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
    id: Int
    main: String
    description: String
    icon: String
  }

  type Wind {
    speed: Float
  }
`;

export default typeDefs;
