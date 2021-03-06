// const REMOVE_STICKER = "sticker/removeSticker";
const GET_STICKER = "sticker/getSticker";
const REMOVE_USER = "session/removeUser";
const EDIT_STICKER = "sticker/editSticker";

const getSticker = (sticker) => ({
  type: GET_STICKER,
  payload: sticker,
});

export const editSticker = (sticker) => ({
  type: EDIT_STICKER,
  payload: "true",
});

// const removeSticker = () => ({
//   type: REMOVE_STICKER,
// });

export const removeUserStickers = (stickerId, postId) => async (dispatch) => {
  console.log(stickerId);
  const res = await fetch(`/api/stickers/${stickerId}/${postId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
  // dispatch(removeSticker(data));
};

export const getUserStickers = (id) => async (dispatch) => {
  console.log(id);
  const res = await fetch(`/api/stickers/${id}`);
  const data = await res.json();
  console.log(data);
  dispatch(getSticker(data));
};

const initialState = { sticker: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_STICKER:
      return { ...state, sticker: action.payload };
    case EDIT_STICKER:
      return { ...state, stickerEdit: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state, { sticker: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
