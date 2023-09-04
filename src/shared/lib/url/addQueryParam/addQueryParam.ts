export const getQueryParams = (params:Record<string, string | null>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `${searchParams.size ? '?' : ''}${searchParams.toString()}`;
};

export const addQueryParam = (params:Record<string, string | null>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
