import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-10">
      <h1 className="text-4xl text-center mb-10 uppercase">Chatbot</h1>
      <Chat />
    </main>
  );
}
