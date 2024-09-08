import { defineAction } from 'astro:actions'
import { z } from 'astro:content'

export const availabilityByIdPlace = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (placeId) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const isAvailable = Math.random() > 0.5
    const spots = Math.floor(Math.random() * 10) + 1

    let message = 'No hay sillas disponibles'
    if (isAvailable) {
      message =
        spots > 1
          ? `Hay ${spots} sillas disponibles`
          : `Hay ${spots} silla disponible`
    }

    return {
      isAvailable,
      spots,
      message,
    }
  },
})
