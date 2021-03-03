// const REMOVE_STICKER = "sticker/removeSticker";
const GET_POST = "post/getPost";
const GET_ALL_POST = "post/getAllPost";
// const EDIT_STICKER = "sticker/editSticker";

export const currentPostId = (id) => ({
  type: GET_POST,
  payload: id,
});

const allPosts = (posts) => ({
  type: GET_ALL_POST,
  payload: posts,
});

// const removeSticker = () => ({
//   type: REMOVE_STICKER,
// });

export const getAllPosts = () => async (dispatch) => {
  const res = await fetch(`/api/posts/`);
  const data = await res.json();
  console.log(data);
  dispatch(allPosts(data));
};

const initialState = { post: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_POST:
      return { ...state, currentPost: action.payload };
    case GET_ALL_POST:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

export default reducer;
