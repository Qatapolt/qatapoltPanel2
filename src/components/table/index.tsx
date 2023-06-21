import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, Typography } from "@mui/material";
import { useTable } from "react-table";

interface TReactTable {
	data: any;
	columns: any;
	title?: string;
}
const ReactTable = ({ data, columns, title }: TReactTable) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		});

	return (
		<Card>
			<Typography className="totalVisitors">{title}</Typography>
			<Table {...getTableProps()}>
				<TableHead>
					{headerGroups.map((headerGroup: any) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column: any) => (
								<TableCell {...column.getHeaderProps()}>
									{column.render("Header")}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{rows.map((row: any) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell: any) => {
									return (
										<TableCell {...cell.getCellProps()}>
											{cell.render("Cell")}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ReactTable;
