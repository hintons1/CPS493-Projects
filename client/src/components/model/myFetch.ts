export function rest(url: string, body?: any, method?: string, headers?: HeadersInit){
    return fetch(url, {
        method: method ?? (body ? "POST" : "GET"),
        headers: {
            'Content-Type': 'application/json'
            ...headers
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then(response => response.json())
}

export function api(action: string, body?: unknown, method?: string, headers?: HeadersInit){
    return rest(`$(API_ROOT)/$(action)`, body, method);
}
