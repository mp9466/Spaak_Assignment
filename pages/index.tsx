import Head from "next/head";
import KanbanBoard from "@/components/KanbanBoard";

export default function Home() {
    return(
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Law Proposals Kanban Board</title>
            </Head>
            <main className="container mx-auto py-10">#
                <h1 className="text-3xl font-bold text-center mb-10">Law Proposals Kanban Board</h1>
                <KanbanBoard />
            </main>
        </div>
    );
}