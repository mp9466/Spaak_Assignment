import { useEffect, useState } from "react";

interface LawProposal {

    id: number;
    statusid: number;
    titel: string;
}

export default function KanbanBoard(){
    const [laws, setLaws] = useState<LawProposal[]>([]);
    const [columns, setColumns] = useState<{[key:number]: LawProposal[]}>({});

    useEffect(() => {
        fetch('/api/laws')
        .then(response => response.json())
        .then(data => {
            //console.log(data);

            const lawsArray = Array.isArray(data) ? data : data.value || [];

            setLaws(data);
            const groupedColumns: {[key:number]: LawProposal[]} = {};
            lawsArray.forEach((law: LawProposal) => {
                if (!groupedColumns[law.statusid]) groupedColumns[law.statusid] = [];
                groupedColumns[law.statusid].push(law);
            });
            setColumns(groupedColumns);
        });
    }, []);

    return (
        <div className="lex space-x-4 p-4">
            {Object.entries(columns).map(([statusid, laws]) => (
                <div key={statusid} className="flex-1 p-4 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Status {statusid}</h2>
                    <div className="space-y-2">
                        {laws.map((law) => (
                            <div key={law.id} className="p-4 bg-white rounded-lg shadow border">
                                <h3 className="font-bold">{law.titel}</h3>
                                </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

}
