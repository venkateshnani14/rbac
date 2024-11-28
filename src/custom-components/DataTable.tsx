import { ColumnDef, flexRender, Table as ReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table_components';
import { Skeleton } from '../custom-components/skeleton';

interface DataTableProps<T> {
    table: ReactTable<T>;
    columns: ColumnDef<T>[];
    isLoading: boolean;
}

function DataTable<T>({ table, columns, isLoading }: DataTableProps<T>) {
    return (
        <Table className="border flex-1 h-full overflow-y-auto">
            <TableHeader className="bg-slate-200 sticky top-0">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id} className="text-secondaryColor font-semibold bg-indigo-50">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className="h-[50%] overflow-y-auto">
                {isLoading ? (
                    <>
                        {[...Array(10)].map((_, index) => (
                            <TableRow key={index}>
                                <TableCell colSpan={columns.length}>
                                    <Skeleton className="w-full h-8" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </>
                ) : table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default DataTable;
