import * as StatusActions from "./status";
import * as SettingsActions from "./settings";
import * as TodosActions from "./todo";

const actions = {
  ...StatusActions,
  ...SettingsActions,
  ...TodosActions,
};

export default actions;
