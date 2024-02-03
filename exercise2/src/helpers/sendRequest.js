export const sendRequest = async (method, url, body = null) => {
  const options = {
    method: method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(url, options)
    if (!response.ok)
      throw new Error('Network response failed')
    const data = await response.json()
    return data
  }
  catch (err) {
    throw new Error(err)
  }
}