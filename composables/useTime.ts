export const useTime = () => {
    const date = new Date();

    return {
      currentDate: date.toLocaleTimeString()
    }
}