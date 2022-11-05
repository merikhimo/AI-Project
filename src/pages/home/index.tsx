import { createRoute } from 'atomic-router';
import { createRouteView } from 'atomic-router-react';

export const homeRoute = createRoute();

export const HomePage = createRouteView({
    route: homeRoute,
    view() {
        return (
            <header>
                <h1>Test</h1>
            </header>
        );
    },
});
