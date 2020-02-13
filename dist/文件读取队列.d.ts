declare const 文件读取队列: {
    asyncwrap: <T extends (...args: any[]) => Promise<any>>(fun: T) => T;
    status: () => import("@masx200/async-task-current-limiter").空闲状态;
    limiter: {
        readonly max: number;
        readonly current: number;
    };
    queue: {
        readonly max: number;
        readonly current: number;
    };
    target: {
        [Symbol.toPrimitive]: () => string;
        [Symbol.toStringTag]: string;
        [Symbol.iterator]: () => IterableIterator<[string | symbol, import("@masx200/event-emitter-target").EVENTLISTENER[]]>;
        entries: () => IterableIterator<[string | symbol, import("@masx200/event-emitter-target").EVENTLISTENER[]]>;
        listenerCount: (name: string | symbol) => number;
        clear: (name: string | symbol) => void;
        removeAllListeners: (name: string | symbol) => void;
        on: (name: string | symbol, callback: import("@masx200/event-emitter-target").EVENTLISTENER) => void;
        addListener: (name: string | symbol, callback: import("@masx200/event-emitter-target").EVENTLISTENER) => void;
        off: (name: string | symbol, callback: import("@masx200/event-emitter-target").EVENTLISTENER) => void;
        removeListener: (name: string | symbol, callback: import("@masx200/event-emitter-target").EVENTLISTENER) => void;
        once: (name: string | symbol, callback: import("@masx200/event-emitter-target").EVENTLISTENER) => void;
        emit: (name: string | symbol, event?: any) => void;
        dispatch: (name: string | symbol, event?: any) => void;
        eventNames: () => (string | symbol)[];
        listeners: (name: string | symbol) => import("@masx200/event-emitter-target").EVENTLISTENER[];
    };
};
export default 文件读取队列;
