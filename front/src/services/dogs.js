const PATH = "/dogs";

export const oneDog = (client) => async () => {
    try {
      const { data } = await client.get(`${PATH}/dogname`);
      return data
    } catch (error) {
      console.info("> error [oneDog]: ", error.message);
      return {
        success: false,
      };
    }
  };