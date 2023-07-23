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

export const deleteDog = (client) => async (params) => {
  try {
    
    const { data } = await client.delete(`${PATH}/${params?.dogname}`)
    
    return data
  } catch (error) {
    console.info(">error [deleteDog]: ", error.message);
    return {
      success: false,
    };
  }

};

export const oneFood = (client) => async () => {

  try {


    const { data } = await client.get(`${PATH}/foods`);

    return data
  } catch (error) {
    console.info("> error [oneFood]: ", error.message);
    return {
      success: false,
    };
  }
};

export const oneMed = (client) => async () => {

  try {


    const { data } = await client.get(`${PATH}/meds`);

    return data
  } catch (error) {
    console.info("> error [oneMed]: ", error.message);
    return {
      success: false,
    };
  }
};

export const createMed = (client) => async (params) => {
  try {
    const { data } = await client.post(`${PATH}/meds?dogname=${params.dogname}&medname=${params.medname}`);

    return data

  } catch (error) {
    console.info("> error [createMed]: ", error.message);
    return {
      success: false,
    };
  }
};

export const createF = (client) => async (params) => {
  try {
    const { data } = await client.post(`${PATH}/foods?dogname=${params.dogname}&foodname=${params.foodname}`);

    return data

  } catch (error) {
    console.info("> error [createFood]: ", error.message);
    return {
      success: false,
    };
  }
};


