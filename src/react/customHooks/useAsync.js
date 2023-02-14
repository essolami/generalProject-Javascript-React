const useAsync = (url) => {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: IDLE,
    data: null,
    error: null,
    loading: false,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);
  const { data, error, status, loading } = state;

  const run = React.useCallback(() => {
    dispatch({ type: PENDING });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: RESOLVED, data });
        console.log(data);
      })
      .catch((error) => {
        let message = error?.response?.data || 'something failed';
        let status = error?.response?.status;
        if (status === 500)
          message = 'Internal server error, the team is working on it';
        dispatch({ type: REJECTED, error: message });
      });
  }, [dispatch, url]);

  return {
    error,
    status,
    data,
    loading,
    run,
  };
};
