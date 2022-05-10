export const Reducervalue = {
  loading: true,
  errorStatus: false,
  error: "",
  username: "",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "clear":
      return {loading: false };
    case "loading":
      return { ...state, loading: true, errorStatus: false, error: "" };
    case "loadingstop":
      return { ...state, loading: false };
    case "error":
      return {
        ...state,
        loading: false,
        errorStatus: true,
        error: action.value,
      };
    case "login":
      return { ...state, loading: false, username: action.value };
    default:
      return state;
  }
};
