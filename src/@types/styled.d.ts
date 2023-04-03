import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string

      'gray.600': string
      'gray.500': string
      'gray.400': string
      'gray.300': string
      'gray.200': string
      'gray.100': string

      'blue.200': string
      'blue.100': string

      'orange.100': string
    }
    font: {
      family: string
      weights: {
        normal: number
        medium: number
      }
      sizes: {
        small: string
        medium: string
      }
    }
    lineHeights: {
      small: string
      medium: string
    }
  }
}
