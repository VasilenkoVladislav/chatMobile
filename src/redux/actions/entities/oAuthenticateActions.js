import { OAUTHENTICATE_REQUEST } from '../../constansActions';

export function oAuthSignInRequest (provider) {
    return { type: OAUTHENTICATE_REQUEST, payload: provider };
}


