// const REMOVE_STICKER = "sticker/removeSticker";
const SET_POST = "post/setPost";
const GET_POST = "post/getPost";
const GET_ALL_POST = "post/getAllPost";
const SET_FILE = "post/setFile";
// const EDIT_STICKER = "sticker/editSticker";

export const currentPostId = (id) => ({
  type: GET_POST,
  payload: id,
});
export const setFile = (formData) => ({
  type: SET_FILE,
  payload: formData,
});
const allPosts = (posts) => ({
  type: GET_ALL_POST,
  payload: posts,
});
const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});

// const removeSticker = () => ({
//   type: REMOVE_STICKER,
// });
export const createPost = (formData) => async (dispatch) => {
  console.log(formData);
  const res = await fetch("/api/posts/", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  dispatch(setPost(data));
  return data;
};

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
    case SET_POST: {
      if (state.post) {
        const newpost = [...state.post, action.payload];
        return { ...state, post: newpost };
      }
      return { ...state, post: action.payload };
    }
    case GET_POST:
      return { ...state, currentPost: action.payload };
    case GET_ALL_POST:
      return { ...state, posts: action.payload };
    case SET_FILE:
      return { ...state, file: action.payload };
    default:
      return state;
  }
}

export default reducer;
