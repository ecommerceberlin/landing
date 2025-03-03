



export function fireAndForget(url: string){

    const controller = new AbortController()
      setTimeout(() => controller.abort(), 5000) // 5 second timeout
      fetch(url, {
        signal: controller.signal
      }).catch(error => {
        if (error.name === 'AbortError') {
          console.log('Sync request timed out')
        } else {
          console.error('Sync error:', error)
        }
      })
  
}