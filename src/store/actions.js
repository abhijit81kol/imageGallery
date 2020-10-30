export const INITIAL_LOADING = "INITIAL_LOADING";
export const PAGINATION_CLICKED = "PAGINATION_CLICKED";

export const initialLoading = (datas) => {
    return {
        type: INITIAL_LOADING,
        dataObject: datas
    };
};