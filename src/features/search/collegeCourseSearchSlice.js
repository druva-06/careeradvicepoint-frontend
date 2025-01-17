import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagination: {
    page: 1,
    size: 10,
  },
  sort: [
    {
      field: "name",
      order: "asc",
    },
  ],
  filters: {
    courses: [],
    departments: [],
    graduation_levels: [],
    countries: [],
    rating: {
      gte: 4,
    },
    dateAdded: {
      from: "2024-01-01",
      to: "2025-01-01",
    },
  },
  search: {
    term: "Engineering",
    fields: ["name", "description"],
  },
};

const collegeCourseSearchSlice = createSlice({
  name: "collegeCourseSearch",
  initialState,
  reducers: {
    updatePagination: (state, action) => {
      state.pagination = action.payload;
    },

    // Update individual fields in pagination
    updatePaginationField: (state, action) => {
      const { field, value } = action.payload;
      state.pagination[field] = value;
    },

    // Update the entire sort array
    updateSort: (state, action) => {
      state.sort = action.payload;
    },

    // Update individual filters or merge with existing filters
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    // Update a specific filter field (e.g., append to courses)
    updateFilterField: (state, action) => {
      const { field, value } = action.payload;
      if (Array.isArray(state.filters[field])) {
        state.filters[field] = [...state.filters[field], ...value];
      } else {
        state.filters[field] = value;
      }
    },

    // Remove specific values from array filters
    removeFilterFieldValue: (state, action) => {
      const { field, value } = action.payload;
      if (Array.isArray(state.filters[field])) {
        state.filters[field] = state.filters[field].filter(
          (item) => !value.includes(item)
        );
      }
    },

    // Update the entire search object
    updateSearch: (state, action) => {
      state.search = action.payload;
    },

    // Update specific fields in search
    updateSearchField: (state, action) => {
      const { field, value } = action.payload;
      state.search[field] = value;
    },

    // Reset all filters to their initial state
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },

    // Reset a specific filter field
    resetFilterField: (state, action) => {
      const { field } = action.payload;
      state.filters[field] = initialState.filters[field];
    },

    // Reset the entire state to the initial state
    resetAll: () => initialState,
  },
});

// Export actions
export const {
  updatePagination,
  updatePaginationField,
  updateSort,
  updateFilters,
  updateFilterField,
  removeFilterFieldValue,
  updateSearch,
  updateSearchField,
  resetFilters,
  resetFilterField,
  resetAll,
} = collegeCourseSearchSlice.actions;

// Export reducer
export default collegeCourseSearchSlice.reducer;
