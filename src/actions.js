export const ADD_DICTIONARY = "ADD_DICTIONARY";
export const DELETE_DICTIONARY = "DELETE_DICTIONARY";
export const ADD_DICTIONARY_ITEM = "ADD_DICTIONARY_ITEM";
export const UPDATE_DICTIONARY_ITEM = "UPDATE_DICTIONARY_ITEM";
export const DELETE_DICTIONARY_ITEM = "DELETE_DICTIONARY_ITEM";
export const VALIDATE_DICTIONARY_ITEMS = "VALIDATE_DICTIONARY_ITEMS";

export const addDictionary = name => ({
  type: ADD_DICTIONARY,
  payload: name
});

export const deleteDictionary = name => ({
  type: DELETE_DICTIONARY,
  payload: name
});

export const addDictionaryItem = (name, domain, range) => dispatch => {
  dispatch({
    type: ADD_DICTIONARY_ITEM,
    payload: {
      name,
      domain,
      range
    }
  });
  dispatch({
    type: VALIDATE_DICTIONARY_ITEMS,
    payload: {
      name
    }
  });
};

export const updateDictionaryItem = (
  name,
  index,
  domain,
  range
) => dispatch => {
  dispatch({
    type: UPDATE_DICTIONARY_ITEM,
    payload: {
      name,
      index,
      domain,
      range
    }
  });
  dispatch({
    type: VALIDATE_DICTIONARY_ITEMS,
    payload: {
      name
    }
  });
};

export const deleteDictionaryItem = (name, index) => dispatch => {
  dispatch({
    type: DELETE_DICTIONARY_ITEM,
    payload: {
      name,
      index
    }
  });
  dispatch({
    type: VALIDATE_DICTIONARY_ITEMS,
    payload: {
      name
    }
  });
};
