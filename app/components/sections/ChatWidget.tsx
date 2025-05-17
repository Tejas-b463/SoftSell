'use client'

import { useState, FormEvent, useEffect, useRef } from 'react'
import { Send, X, CircleUser, Bot, BotMessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  role: 'user' | 'bot'
  content: string
}

const exampleQuestions = [
  'How do I sell my license?',
  'Can I transfer ownership?',
  'What payment methods are accepted?'
]

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hi! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Closed by default now
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const [showTyping, setShowTyping] = useState(false)


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showTyping])

  const sendMessage = async (message: string) => {
    if (loading) return
    const userMsg: Message = { role: 'user', content: message }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setLoading(true)
    setShowTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      })
      const data = await res.json()
      const botMsg: Message = { role: 'bot', content: data.reply }

      // typing delay
      setTimeout(() => {
        setMessages(prev => [...prev, botMsg])
        setLoading(false)
        setShowTyping(false)
      }, 1200)
    } catch {
      const fallback: Message = { role: 'bot', content: 'Sorry, something went wrong.' }
      setTimeout(() => {
        setMessages(prev => [...prev, fallback])
        setLoading(false)
        setShowTyping(false)
      }, 1200)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input.trim())
    setInput('')
  }

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full cursor-pointer shadow-lg z-50 "
          aria-label="Open chat"
        >
          <BotMessageSquare size={24} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-[350px] shadow-xl rounded-xl bg-white border border-gray-200 p-4 z-50 flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-500 cursor-pointer hover:text-gray-700"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>

            <div
              className="flex-1 overflow-y-scroll space-y-3 mb-3 mt-2 pr-1 scrollbar-hide"
              style={{ maxHeight: 300 }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {/* Avatar */}
                  {m.role === 'bot' ? (
                    <Bot className="w-5 h-5 text-gray-500 mt-1" />
                  ) : (
                    <CircleUser className="w-5 h-5 text-blue-600 mt-1" />
                  )}

                  {/* Message bubble */}
                  <div
                    className={`max-w-[70%] p-2 rounded-lg ${
                      m.role === 'user'
                        ? 'bg-blue-100 text-blue-900 rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {showTyping && (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Bot className="w-5 h-5 animate-pulse" />
                  <span>Bot is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Example quick questions */}
            <div className="flex flex-wrap gap-2 mb-3">
              {exampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 dark:text-black"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 border px-2 py-1 rounded text-sm dark:text-black"
                disabled={loading}
                aria-label="Chat input"
              />
              <button
                disabled={loading}
                type="submit"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default ChatWidget