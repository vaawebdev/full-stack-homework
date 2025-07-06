import { queryAdjacentNumbers } from "@/actions/numbers";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function NumbersTable() {
  const data = await queryAdjacentNumbers();

  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead>ID 1</TableHead>
          <TableHead>Number 1</TableHead>
          <TableHead>ID 2</TableHead>
          <TableHead>Number 2</TableHead>
          <TableHead>Sum</TableHead>
        </TableRow>
      </TableHeader>
      {!data.length ? <TableCaption>Adjacent Numbers</TableCaption> : null}
      <TableBody>
        {data.map((it) => (
          <TableRow key={it.id1}>
            <TableCell>{it.id1}</TableCell>
            <TableCell>{it.number1}</TableCell>
            <TableCell>{it.id2}</TableCell>
            <TableCell>{it.number2}</TableCell>
            <TableCell>{it.sum}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
