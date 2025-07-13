'use client'

import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function Home() {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('users').select('count')
        if (error) throw error
        setConnected(true)
      } catch (error) {
        console.error('Connection failed:', error)
        setConnected(false)
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) return <div>Testing connection...</div>
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">RenovationHub</h1>
      <p className="text-xl mb-4">
        Database Status: {connected ? '✅ Connected' : '❌ Not Connected'}
      </p>
      {connected && (
        <div className="bg-green-100 p-4 rounded-lg">
          <p>Great! Your Supabase connection is working.</p>
          <p>Ready to start building your renovation platform!</p>
        </div>
      )}
    </div>
  )
}