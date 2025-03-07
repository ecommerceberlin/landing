export function fireAndForget(url: string, body?: any){
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 5000) // 5 second timeout
    fetch(url, {
      signal: controller.signal,
      method: body ? 'POST' : 'GET',
      headers: body ? {
        'Content-Type': 'application/json'
      } : undefined,
      body: body ? JSON.stringify(body) : undefined
    }).catch(error => {
      if (error.name === 'AbortError') {
        console.log('Sync request timed out')
      } else {
        console.error('Sync error:', error)
      }
    })
}