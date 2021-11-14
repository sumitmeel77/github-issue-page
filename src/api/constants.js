import { getQueryStringValue } from '../components/commons/getQueryStringValue';

// exporting url of data
export const WEB_URL = 'https://github.com';

export const BASE_URL = 'https://api.github.com';

export const OWNER = getQueryStringValue('owner') || 'facebook';

export const REPO = getQueryStringValue('repo') || 'create-react-app';

export const GIT_REPO_INFO = `${BASE_URL}/repos/${OWNER}/${REPO}`;

export const GIT_ISSUE_ENDPOINT = `${GIT_REPO_INFO}/issues?page=1&per_page=1000`;


