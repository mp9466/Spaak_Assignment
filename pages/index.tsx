import Head from "next/head";
import KanbanBoard from "@/components/KanbanBoard";
import '../app/globals.css';

export default function Home() {
    return(
        <div className="max-h-screen h-screen overflow-x-auto overflow-y-hidden w-screen bg-gradient-to-r from-violet-600 to-indigo-600">
            <Head>
                <title>Law Proposals Kanban Board</title>
                <meta name="description" content="Kanban Board of danish laws"></meta>
                <meta name="keywords" content="Kanban, Board, Danish, Laws"></meta>
                <meta name="author" content="Marko Palinec"></meta>
            </Head>
            <main className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Law Proposals Kanban Board</h1>
                <KanbanBoard />
            </main>
        </div>
    );
}