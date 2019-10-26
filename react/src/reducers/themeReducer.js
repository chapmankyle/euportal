const defaultState = {
  primary: "FFFFFF",
  secondary: "ff5733",
  tertiary:  "C70039",
  logo: null,
  about_us: "Hello"
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_THEME":
      return action.data;
    default:
      return state;
  }
}
