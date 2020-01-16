export const ADD_DICTIONARY = "ADD_DICTIONARY";
export const DELETE_DICTIONARY = "DELETE_DICTIONARY";

export const addDictionary = name => ({
  type: ADD_DICTIONARY,
  payload: name
});

export const deleteDictionary = name => ({
  type: DELETE_DICTIONARY,
  payload: name
});
