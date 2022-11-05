import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { homeRoute } from '$pages';

// Define routes
export const routes = [{ path: '/', route: homeRoute }];

// Create router
export const router = createHistoryRouter({ routes });

// Create history
const history = createBrowserHistory();

// Attach it to router
router.setHistory(history);
