"use client"

import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

export default function TlDraw() {
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Tldraw />
        </div>
    )
}