import { createSlice, nanoid } from "@reduxjs/toolkit";

import { sub } from "date-fns";

const initialState = [
  {
    // omitted fields
    id: 1,
    content: "Hello!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    // omitted fields
    id: 2,
    content: "More text",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
    // other reducers here
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
