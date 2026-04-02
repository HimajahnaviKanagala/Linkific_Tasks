import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";

function Chat() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snap) => {
      setMsgs(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })),
      );
    });
    return unsub;
  }, []);

  const send = async () => {
    if (!msg.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: msg,
      userId: user?.uid,
      createdAt: serverTimestamp(),
    });

    setMsg("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-lg font-semibold shadow">
        💬 Chat Room
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {msgs.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.userId === user?.uid ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs shadow ${
                m.userId === user?.uid
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white flex gap-2 shadow">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={send}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
