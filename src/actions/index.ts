import { availabilityByIdPlace } from './places/availability-by-id.action'
import { getPlaces } from './places/get.action'

export const server = {
  getPlaces,
  availabilityByIdPlace,
}
