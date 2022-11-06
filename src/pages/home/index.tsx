import { createRoute } from 'atomic-router';
import { createRouteView } from 'atomic-router-react';

import { Header } from '$shared/ui';

export const homeRoute = createRoute();

export const HomePage = createRouteView({
    route: homeRoute,
    view() {
        return <Header />;
    },
});
