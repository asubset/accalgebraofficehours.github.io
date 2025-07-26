fetch('https://example.com/data/sessions.json')
  .then(res => res.json())
  .then(data => {
    const PREDEFINED_SESSIONS = data;
    console.log(PREDEFINED_SESSIONS);
    // Do something with the sessions
  })
  .catch(err => console.error('Failed to fetch sessions:', err));
