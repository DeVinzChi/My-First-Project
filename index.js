require('dotenv').config()

const express = require('express')
const { createClient } = require('@supabase/supabase-js')

const app = express()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.get('/', async (req, res) => {
  const { data, error } = await supabase.from('messages').select('*')
  if (error) return res.send('Error: ' + error.message)
  res.json(data)
})

module.exports = app

app.get('/add-message', async (req, res) => {
  const newMessage = { content: 'Learning JavaScript with Claude' }
  const { error } = await supabase.from('messages').insert(newMessage)
  if (error) return res.send('Error: ' + error.message)
  res.send('Message added successfully')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

app.get('/orders', async (req, res) => {
  const { data, error } = await supabase.from('orders').select('*')
  if (error) return res.send('Error: ' + error.message)
  res.json(data)
})