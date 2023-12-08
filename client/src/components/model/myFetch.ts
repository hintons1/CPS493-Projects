const API_ROOT = import.meta.env.VITE_API_ROOT as string;

export function rest(url: string, data?: unknown, method?: string, headers?: HeadersInit){
    return fetch(url, {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: data ? JSON.stringify(data) : undefined
    })
    .then(response => response.ok
        ? response.json()
        : response.json().then(err => Promise.reject(err))
        )
}

export function api(action: string, body?: unknown, method?: string, headers?: HeadersInit){
    return rest(`${API_ROOT}/${action}`, body, method, headers);
}