self.addEventListener('push', e=>{
  const data = e.data.json()
  console.log('data', data)
  self.registration.showNotification(data.notification.title, {
    body: data.notification.body
  });
})