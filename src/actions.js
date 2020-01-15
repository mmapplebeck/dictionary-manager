export const ADD_DICTIONARY = "ADD_DICTIONARY";

export const addDictionary = name => ({
  type: ADD_DICTIONARY,
  payload: name
});
