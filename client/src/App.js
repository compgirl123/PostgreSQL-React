useEffect(() => {
  fetch('/api/items')
    .then(async (res) => {
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Unknown error occurred');
      }
      return res.json();
    })
    .then((data) => {
      setItems(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching items:', err);
      setError(err.message);
      setLoading(false);
    });
}, []);
