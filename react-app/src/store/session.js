const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const login = ({ email, password }) => async (dispatch) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log(data.id);
  dispatch(setUser(data));
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch("/api/auth");
  const data = await res.json();
  if (res.ok) {
    dispatch(setUser(data));
  }
};

export const createUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  dispatch(setUser(data));
};

export const photoUpload = (file) => async (dispatch) => {
  let photoUrl;
  const formData = new FormData();
  formData.append("user_file", file);
  const res = await fetch("/api/users/update/profile", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    photoUrl = await res.json();
    return photoUrl;
  }
};

export const logout = () => async (dispatch) => {
  const res = await fetch("/api/auth/logout", {
    method: "DELETE",
  });

  const data = await res.json();
  if (data.message === "User logged out") {
    dispatch(removeUser());
  }
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
