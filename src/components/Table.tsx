import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

function TableComponent() {
  const students = [
    {
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      major: "Computer Science",
      address: "123 Main Street, Anytown, CA 12345",
    },
    {
      name: "Bob Smith",
      age: 22,
      grade: "B",
      major: "Electrical Engineering",
      address: "456 Elm Street, Someville, NY 54321",
    },
    {
      name: "Charlie Brown",
      age: 21,
      grade: "A+",
      major: "Mechanical Engineering",
      address: "789 Oak Street, Anytown, CA 12345",
    },
    {
      name: "David Lee",
      age: 23,
      grade: "B+",
      major: "Civil Engineering",
      address: "101 Pine Street, Anycity, TX 78901",
    },
    {
      name: "Emily Davis",
      age: 20,
      grade: "A-",
      major: "Computer Science",
      address: "234 Maple Street, Smallville, NJ 07890",
    },
    {
      name: "Frank Miller",
      age: 22,
      grade: "B",
      major: "Business Administration",
      address: "567 Cedar Street, Bigtown, CA 98765",
    },
    {
      name: "Grace Jones",
      age: 21,
      grade: "A+",
      major: "Psychology",
      address: "890 Willow Street, Quietville, NY 12345",
    },
    {
      name: "Henry Williams",
      age: 23,
      grade: "B+",
      major: "Biology",
      address: "111 Pine Street, Greencity, TX 54321",
    },
    {
      name: "Isabella Brown",
      age: 20,
      grade: "A-",
      major: "Chemistry",
      address: "222 Maple Street, Smallville, NJ 07890",
    },
    {
      name: "Jack Smith",
      age: 22,
      grade: "B",
      major: "Physics",
      address: "333 Cedar Street, Bigtown, CA 98765",
    },
  ];
  return (
    <div className="p-4 bg-[#888]">
      {" "}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead >Major</TableHead>
            <TableHead >Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student: any) => {
            return (
              <>
                <TableRow>
                  <TableCell className="fot-medium">{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.major}</TableCell>
                    <TableCell>{student.address}</TableCell>
                </TableRow>{" "}
              </>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableComponent;
