import { configureStore } from "@reduxjs/toolkit";
import abroadEducationFilterSlice from "./abroadEducation/abroadEducationFilterSlice";
import abroadEducationSlice from "./abroadEducation/abroadEducationSlice";
import indiaEducationSlice from "./indiaEducation/indiaEducationSlice";
import indiaEducationFilterSlice from "./indiaEducation/indiaEducationFilterSlice";
import onlineEducationSlice from "./onlineEducation/onlineEducationSlice";
import onlineEducationFilterSlice from "./onlineEducation/onlineEducationFilterSlice";
import collegeCourseSearchSlice from "./search/collegeCourseSearchSlice";

export const store = configureStore({
  reducer: {
    abroadEducation: abroadEducationSlice,
    abroadEducationFilter: abroadEducationFilterSlice,
    indiaEducation: indiaEducationSlice,
    indiaEducationFilter: indiaEducationFilterSlice,
    onlineEducation: onlineEducationSlice,
    onlineEducationFilter: onlineEducationFilterSlice,
    collegeCourseSearch: collegeCourseSearchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
