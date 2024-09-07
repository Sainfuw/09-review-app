import { defineAction } from 'astro:actions'
import { prisma } from '../../db'

export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      return await prisma.place.findMany()
    } catch (error) {
      throw new Error('Failed to get places')
    }
  },
})
