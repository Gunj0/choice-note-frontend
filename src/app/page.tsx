export default async function Home() {
  type Note = {
    noteId: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };

  const data: Note[] = await fetch(
    "https://choice-note-backend.onrender.com/api/note"
  ).then((res) => res.json());

  console.log(data);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to ChoiceNote!
        </h1>
        <h2>This project is Work in progress...</h2>
        {data.length === 0 ? (
          <p className="text-lg text-center sm:text-left">
            You have no notes yet. Start by creating a new note!
          </p>
        ) : (
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>
            <ul className="space-y-4">
              {data.map((note) => (
                <li
                  key={note.noteId}
                  className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                  <p className="text-gray-700 mb-2">
                    {note.content.length > 100
                      ? note.content.slice(0, 100) + "..."
                      : note.content}
                  </p>
                  <p className="text-sm text-gray-500">
                    Created at: {new Date(note.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date(note.updatedAt).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
