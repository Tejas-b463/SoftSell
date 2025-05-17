import { NextRequest, NextResponse } from 'next/server'

type Message = {
  role: 'user' | 'bot'
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const messages: Message[] = body.messages

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { reply: "No messages received. Please send a valid message array." },
        { status: 400 }
      )
    }

    const lastMessage = messages[messages.length - 1]?.content.toLowerCase()

    const responses: Record<string, string> = {
      'how do i sell my license?':
        'You can sell your license from the dashboard by clicking the "Sell License" option.',
      'can i transfer ownership?':
        'Yes, license ownership can be transferred via the settings page.',
      'what payment methods are accepted?':
        'We accept Visa, MasterCard, and PayPal.'
    }

    const reply =
      responses[lastMessage] ??
      "I'm not sure how to answer that. Try asking something else related to licensing."

    return NextResponse.json({ reply })
  } catch {
  return NextResponse.json(
    { reply: 'Invalid request payload.' },
    { status: 400 }
  )
}
}
