import { Directus } from '@directus/sdk';

const directus = new Directus("https://sj9x8ytr.directus.app/", {
    auth: {
        staticToken: "Qs3Z-nk86ZQ5wbLZzsw2KQNLlh9q6qAI"
    }
});

export default directus;
