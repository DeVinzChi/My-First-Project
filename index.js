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