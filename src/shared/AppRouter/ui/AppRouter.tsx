import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { appRouterConfig } from "@/app/config";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {appRouterConfig.map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

