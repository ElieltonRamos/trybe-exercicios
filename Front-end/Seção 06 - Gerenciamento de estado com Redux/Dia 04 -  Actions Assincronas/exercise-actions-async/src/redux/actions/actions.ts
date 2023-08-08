import { Dispatch } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

type Data = {
  message: string;
};

export function fetchDogImage() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json() as Data;
      dispatch(requestSuccessful(data.message));
    } catch (error: unknown) { // Atualize para "unknown" em vez de "any"
      dispatch(requestFailed((error as Error).message)); // Faça uma coerção para o tipo "Error"
    }
  };
}

