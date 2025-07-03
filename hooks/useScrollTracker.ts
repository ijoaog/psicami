// lib/hooks/useScrollTracker.ts
import { useEffect } from "react"

export function useTrackFooterView() {
  useEffect(() => {
    const footer = document.querySelector("footer")
    let alreadyTracked = false

    function isInViewport(el: Element) {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom >= 0
    }

    function onScroll() {
      if (!footer || alreadyTracked) return
      if (isInViewport(footer)) {
        window.gtag?.("event", "visualizou_rodape", {
          event_category: "comportamento",
          event_label: "Footer view",
        })
        alreadyTracked = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
}
