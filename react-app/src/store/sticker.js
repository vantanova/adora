const REMOVE_STICKER = "sticker/removeSticker";
const GET_STICKER = "sticker/getSticker";
const EDIT_STICKER = "sticker/editSticker";

const getSticker = (sticker) => ({
  type: GET_STICKER,
  payload: sticker,
});

export const editSticker = (sticker) => ({
  type: EDIT_STICKER,
  payload: "true",
});

const removeSticker = () => ({
  type: REMOVE_STICKER,
});

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
    default:
      return state;
  }
}

export default reducer;
