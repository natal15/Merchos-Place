const PATH = "/dogs";
import { client } from "./index"

export const oneDog = (client) => async () => {

  try {


    const { data } = await client.get(`${PATH}`);

    return data
  } catch (error) {
    console.info("> error [oneDog]: ", error.message);
    return {
      success: false,
    };
  }
};

export const dogData = async (params) => {
  try {
    const { data } = await client.get(`${PATH}/dogname/${params.dogname}`);

    return data

  } catch (error) {
    console.info("> error [dogData]: ", error.message);
    return {
      success: false,
    };
  }
};

export const createDog = (client) => async (payload) => {
  try {
    const { data } = await client.post(`${PATH}`, payload);

    return data

  } catch (error) {
    console.info("> error [createDog]: ", error.message);
    return {
      success: false,
    };
  }
};

export const deleteDog = () => async (params) => {
  try {
    const { data } = await client.delete(`${PATH}/${params.dogname}`)
    return data
  } catch (error) {
    console.info(">error [deleteDog]: ", error.message);
    return {
      success: false,
    };
  }

};


