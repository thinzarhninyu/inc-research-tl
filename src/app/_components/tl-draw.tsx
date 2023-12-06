"use client";

import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';
import { useOthers } from "../../../liveblocks.config";

export default function TlDraw() {
    const others = useOthers();
    const userCount = others.length + 1;

    return (
        <div className="fixed inset-0 flex flex-col">
            <div className="self-end m-4">
                <p className='font-bold text-sm'>{userCount} active users</p>
            </div>
            <Tldraw />
        </div>
    );
}
