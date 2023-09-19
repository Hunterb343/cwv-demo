import { FC } from "react"
import imageCarfoxPresentsLeft200WebP from "@images/carfox-presents-left/carfox-presents-left_200.webp"
import imageCarfoxPresentsLeft200Png from "@images/carfox-presents-left/carfox-presents-left_200.png"
import imageCarfoxPresentsLeft300WebP from "@images/carfox-presents-left/carfox-presents-left_300.webp"
import imageCarfoxPresentsLeft300Png from "@images/carfox-presents-left/carfox-presents-left_300.png"

/**
 * NEVER use NEXT Image, HTML Picture is ALWAYS better for performance.
 * Why? Next uses javascript to do all of its image magic.  Picture is in the and
 * the browser is able to process much faster as the browser will not be using the overworked JS thread.
 */
export const PictureCarfoxPresents: FC = () => (
  <picture>
    <source srcSet={imageCarfoxPresentsLeft300WebP.src} media="(min-width: 800px)" type="image/webp" />
    <source srcSet={imageCarfoxPresentsLeft300Png.src} media="(min-width: 800px)" />
    <source srcSet={imageCarfoxPresentsLeft200WebP.src} type="image/webp" />
    <img
      src={imageCarfoxPresentsLeft200Png.src as any}
      alt="Carfox presenting app features"
      // loading="lazy" - Lazy is not needed here, but you may want to use this for offscreen images
    />
  </picture>
)

export default PictureCarfoxPresents
