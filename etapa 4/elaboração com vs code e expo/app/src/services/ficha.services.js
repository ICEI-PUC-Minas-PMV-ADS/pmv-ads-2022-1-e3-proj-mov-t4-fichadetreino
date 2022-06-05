import API from './webapi.services';
import { BASE_URL } from './urls';

export const getExercicio = async (param) => {
  try {
    return await API.get(`${BASE_URL}/exercicios`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const insertExercicio = async (param) => {
  try {
    return await API.post(`${BASE_URL}/exercicios`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateExercicio = async (param) => {
  try {
    return await API.put(`${BASE_URL}/exercicios/${param.id}`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteExercicio = async (param) => {
  try {
    return await API.delete(`${BASE_URL}/exercicios/${param}`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
