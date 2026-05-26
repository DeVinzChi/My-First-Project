const express = require('express')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const app = express()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.get('/', async (req, res) => {
  const { data, error } = await supabase.from('messages').select('*')
  if (error) return res.send('Error: ' + error.message)
  res.json(data)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})