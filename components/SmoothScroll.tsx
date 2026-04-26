'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let locomotiveScroll: any;
    
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.05,
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 1.1,
          }
        })
      } catch (error) {
        console.error('Failed to load locomotive-scroll:', error)
      }
    }

    initLocomotiveScroll()

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [])

  return <div data-scroll-container>{children}</div>
}
