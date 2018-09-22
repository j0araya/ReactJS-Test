const CORE_ENDPOINT = 'http://reduxblog.herokuapp.com/api/posts';

class PostService {
    async get(id) {
        const url = `${CORE_ENDPOINT}/${id}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        if (!response.ok) {
            return new Error(`Status ${response.status}`);
        }
        return await response.json();
    }

    async post(data) {
        const url = CORE_ENDPOINT;
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async list() {
        const url = `${CORE_ENDPOINT}`;
        const response = await fetch(url, {
            method: 'GET',
        });
        if (!response.ok) {
            return new Error(`Status ${response.status}`);
        }
        return await response.json();
    }
    async remove(id) {
        const url = `${CORE_ENDPOINT}/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });
        return await response.json();
    }
}

export default new PostService();
