import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";
import mdata from "../MOCK_DATA.json";
export type user = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date: string;
  name: string;
};
const TanStackTable = () => {
  const data = useMemo(() => mdata, []);
  const [user, setUser] = useState([]);
  //step 1.columnHelper
  const columnHelper = createColumnHelper<user>();
  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
      header: () => "FirstName",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
      header: () => "LastName",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => {
        const first_name = info.row.original.first_name;
        const last_name = info.row.original.last_name;
        return `${first_name} ${last_name}`;
      },
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: () => "Date",
      cell: (info) => info.getValue(),
    }),
  ];
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: user,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // enableSorting: true,
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    onSortingChange: setSorting,

    // initialState: { for initial state on which user want to redner tha table
    //   pagination: {
    //     pageIndex: 2, //custom initial page index
    //     pageSize: 10, //custom default page size
    //   },
    // },
  });
  useEffect(() => {
    const url = `http://localhost:3000/users`;
    fetch(url).then((res) =>
      res.json().then((users) => {
        setUser(users);
      })
    );
  }, []);

  console.log(data);
  return (
    <div className="w3-container w-2/3">
      <input
        type="text"
        placeholder="serach..."
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="w3-table w3-striped w3-bordered">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                  {{ asc: "⬆️", desc: "⬇️" }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((rows) => (
            <tr key={rows.id}>
              {rows.getVisibleCells().map((cellis) => (
                <td key={cellis.id}>
                  {flexRender(
                    cellis.column.columnDef.cell,
                    cellis.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.firstPage()}
        className="px-2 bg-slate-500 rounded-lg py-2 mr-1
         hover:bg-slate-700 transition duration-300 ease-in-out
          active:bg-yellow-300"
      >
        FirstPage
      </button>
      <button
        className="px-2 bg-slate-500 rounded-lg py-2 mr-1
         hover:bg-slate-700 transition duration-300 ease-in-out
          active:bg-yellow-300"
        onClick={() => table.lastPage()}
      >
        LastPage
      </button>
      <button
        onClick={() => table.previousPage()}
        className="px-2 bg-slate-500 rounded-lg py-2 mr-1
         hover:bg-slate-700 transition duration-300 ease-in-out
          active:bg-yellow-300"
      >
        PreviousPage
      </button>
      <button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
        className="px-2 bg-slate-500 rounded-lg
         py-2 mr-1 hover:bg-slate-700 transition duration-300 ease-in-out
          active:bg-yellow-300"
      >
        NextPage
      </button>
    </div>
  );
};

export default TanStackTable;
