import { useEffect, useRef, useState } from 'react'

interface CopyCommandProps {
  /** Text placed on the clipboard */
  copyText: string
  /** Command shown after the `$` prompt */
  display: string
}

function fallbackCopy(text: string): boolean {
  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  } catch {
    return false
  }
}

function CopyCommand({ copyText, display }: CopyCommandProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    let ok = false
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(copyText)
        ok = true
      } catch {
        ok = fallbackCopy(copyText)
      }
    } else {
      ok = fallbackCopy(copyText)
    }
    if (ok) {
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="copy-cmd">
      <code className="copy-cmd-text">
        <span className="copy-cmd-prompt" aria-hidden="true">$ </span>
        {display}
      </code>
      <button type="button" className="copy-cmd-btn" onClick={copy}>
        <span aria-hidden="true">{copied ? '[COPIED]' : '[COPY]'}</span>
        <span className="sr-only" aria-live="polite">
          {copied ? 'Copied to clipboard' : 'Copy email address'}
        </span>
      </button>
    </div>
  )
}

export default CopyCommand
