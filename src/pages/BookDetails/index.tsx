import { Route, Routes } from "react-router-dom";

import BookDetails from "./BookDetails";
// import { LayoutSplashScreen } from "../../../../_metronic/layout";

export default function ModuleRoute() {
    return (
        <Routes>
            {/* <Route index element={<Table />} /> */}

            <Route path="/:id" element={<BookDetails />} />
        </Routes>

    );
}