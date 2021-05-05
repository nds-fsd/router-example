export const customFetch = ({url, method, body, successCallback, errorCalback}) => {
    const options = {
        method: method,
        body: JSON.stringify(body)
    };
    fetch(url, options)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return Promise.reject;
            })
            .then(successCallback)
            .catch(errorCalback)
}