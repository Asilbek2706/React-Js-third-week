import useOnlineStatus from "../hooks/online-status.hook.ts";

export default function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}