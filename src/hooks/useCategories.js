import { useEffect, useState } from "react"
import { getFromCache, setToCache } from "../utils/cache";
import { customFetch } from "../utils/fetch";
import { setStorageObject } from "../utils/storage";

const KEY = 'categories';

export const useCategories = () => {

    const [categories, setCategories] = useState();
    const [error, setError] = useState({});
    const [loaded, setLoaded] = useState(false);

    const successCallback = (payload) => {
        setLoaded(true);
        setCategories(payload);
        setToCache(KEY, payload);
    };

    useEffect(() => {
        const categoruFromCache = getFromCache(KEY);
        if (categoruFromCache) {
            setLoaded(true);
            setCategories(categoruFromCache);
        } else {
            const url = 'http://localhost:3001/categories';
            customFetch({
                url,
                body: categories,
                method: 'GET',
                successCallback,
                errorCalback: setError,
            });
        }
    }, []);

    const saveCategory = (category) => {
        const url = 'http://localhost:3001/categories';

        customFetch({
            url,
            body: categories,
            method: 'POST',
            successCallback,
            errorCalback: setError,
        });
    }

    const search = (category) => {
        return categories.filter(c => c.name.startsWith(category));
    }

    return {
        categories,
        saveCategory,
        error,
        loaded,
        search,
    };
}