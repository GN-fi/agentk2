import { configureStore, createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
	name: "layout",
	initialState: { layout: [] as any[] }, // Initialize with an empty array of any type
	reducers: {
		setLayout: (state, action) => {
			state.layout = action.payload;
		},
	},
});

export const { setLayout } = layoutSlice.actions;

export const store = configureStore({
	reducer: {
		layout: layoutSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {layout: LayoutState}
export type AppDispatch = typeof store.dispatch;
