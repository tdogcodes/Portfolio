import React, { useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

type Image = {
  id: number
  imageSrc: string
}

type Props = {
  images: Image[]
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const Carousel = ( { images }: Props ) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, images.length, imageCount)

  const swipeToImage = (swipeDirection: number)  => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = (imageId: number) => {
    let changeDirection : any
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }
//className="mt-8 -mb-4 lg:mt-4 lg:mx-auto lg:max-w-[90%] w-auto h-auto object-contain border border-white/20 rounded-3xl"
  return (
    <main>
      <div className="slider-container">
        <div className="slider hidden md:block lg:-mt-12 lg:-mb-10 ">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${images[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="buttons hidden md:block sm:-mt-12 sm:mb-4 md:mt-0 md:mb-4 lg:my-0">
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div>
      </div>

    </main>
  )
}

export default Carousel
