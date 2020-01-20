import { Record, List } from "immutable";

export const DictionaryItem = Record({
  domain: "",
  range: "",
  errors: List()
});

export default DictionaryItem;
