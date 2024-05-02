export const variants = {
    item: {
      initial: { y: 40, opacity: 0 },
      after: {
        y: 0,
        opacity: 1,
      },
    },
    onExit: {
      initial: {
        opacity: 1,
        scale: 1,
      },
      after: {
        opacity: 0,
        scale: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };