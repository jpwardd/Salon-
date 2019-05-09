import { css } from 'styled-components'

const maxSizes = {
  desktop: 2000,
  tablet: 768,
  phone: 576,
}



export const media = Object.keys(maxSizes).reduce((acc, label) => {
  acc[label] = (...args) => css `
    @media (max-width: ${maxSizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

  
export const logoURL = "https://lh3.googleusercontent.com/3YacEv8WexsZYghMy96Qvt9DLKvs_xs2JaAYdh7oDxBriADfxCAPFlQ5x5H8aYpZMJeF52UzZ1RGpNDK6bewHkMUvSVT7e08i4E2C6gJFin6Nsys1Oni8XUcEQlUxJ8B7XAaV8MMI0Ecy-2-mZvHJWrw5oI6QdMRERcgwGgNNW99muE6AWkiFyfrexsSnGKstjE3vDPkx9PiCKoLCgLkXq_9HGYHxLUHysXOzoYlMQI6hLZj7I5pr0K5mOXJvX1k3IXRH7XHISIvpKKqNuZpYsQNoIq7LzhaWAqGotuynbGNEF3FoR2SixgVN0Jp2Onjvys7PodT2nlwXX5FY2CNDYpb36k95i68Zm2hkW6NDAuq_xIwMAK7hGyzrw86q0O0liQyR8eek5Snflbs0ZElQuMt2rFKnFrnuYiKjg6-jyWiM8tf1Hi19s6rBgYmc9WA1hbhsLDW1AfmCkFveGIG3cvtuN4jBIL3n3-HGivYw_TnfyYSV5TMK-69cWkFdTL9FDFGkCM19As3U6rd_NJ4W_K4sguM9QkTQiBwaRW2Vb7UwiC1-DN6ShZlbgz3tOLEC-9K_W0a5MXsGfzzz7NA-7QiT19g7CtYKXHdVDA1ehlw8GPsjyRLyddUGQX2aGVnTqH0-w103wuevMMMSatePbEmJXrFR5k=s750-no"
