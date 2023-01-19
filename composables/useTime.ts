export const useTime = () => {
    const date = new Date();

    return {
      currentTime: date.toLocaleTimeString(),
      currentDate: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`,
    }
}