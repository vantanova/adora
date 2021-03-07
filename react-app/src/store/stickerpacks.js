// const REMOVE_STICKER = "sticker/removeSticker";
const GET_STICKERPACKS = "sticker/getStickerpacks";
// const EDIT_STICKER = "sticker/editSticker";

const getStickerpacks = (sticker) => ({
  type: GET_STICKERPACKS,
  payload: sticker,
});

// export const editSticker = (sticker) => ({
//   type: EDIT_STICKER,
//   payload: "true",
// });

// const removeSticker = () => ({
//   type: REMOVE_STICKER,
// });

export const redeemUserStickerpacks = (packTypeId) => async (dispatch) => {
  const res = await fetch(`/api/stickerpacks/${packTypeId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
  return data;
  // dispatch(removeSticker(data));
};

export const getUserStickerpacks = (id) => async (dispatch) => {
  console.log(id);
  const res = await fetch(`/api/stickerpacks/${id}`);
  const data = await res.json();
  console.log(data);
  dispatch(getStickerpacks(data));
};

const initialState = { stickerpacks: null };

function reducer(state = initialState, action) {
  // let newState;
  switch (action.type) {
    case GET_STICKERPACKS:
      return { ...state, stickerpacks: action.payload };
    // case EDIT_STICKER:
    //   return { ...state, stickerEdit: action.payload };
    default:
      return state;
  }
}

export default reducer;
