export const ADD_DICTIONARY = "ADD_DICTIONARY";
export const DELETE_DICTIONARY = "DELETE_DICTIONARY";
export const ADD_DICTIONARY_ITEM = "ADD_DICTIONARY_ITEM";
export const UPDATE_DICTIONARY_ITEM = "UPDATE_DICTIONARY_ITEM";
export const DELETE_DICTIONARY_ITEM = "DELETE_DICTIONARY_ITEM";

export const addDictionary = name => ({
  type: ADD_DICTIONARY,
  payload: name
});

export const deleteDictionary = name => ({
  type: DELETE_DICTIONARY,
  payload: name
});

export const addDictionaryItem = (name, domain, range) => ({
  type: ADD_DICTIONARY_ITEM,
  payload: {
    name,
    domain,
    range
  }
});

export const updateDictionaryItem = (name, index, domain, range) => ({
  type: UPDATE_DICTIONARY_ITEM,
  payload: {
    name,
    index,
    domain,
    range
  }
});

export const deleteDictionaryItem = (name, index) => ({
  type: DELETE_DICTIONARY_ITEM,
  payload: {
    name,
    index
  }
});
